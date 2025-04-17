import { scopePerRequest } from "awilix-express";
import chalk from "chalk";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import { createServer, Server as HttpServer } from "http";
import {
  Server,
  container,
  type ServerOptions,
  type ServerRoute,
} from "@/core";

export class ExpressServer implements Server {
  private readonly app: express.Application;
  private readonly httpServer: HttpServer;
  private readonly port: string;
  private readonly routes: ServerRoute[] = [];
  private readonly router: express.Router;

  constructor(options: ServerOptions) {
    const { port, routes } = options;

    this.app = express();
    this.port = port;
    this.routes = routes;
    this.router = express.Router();
    this.httpServer = createServer(this.app);

    this.init();
  }

  init() {
    this.app.use((req, res, next) => {
      res.removeHeader("X-Powered-By");
      next();
    });

    this.app.use(scopePerRequest(container));
    this.app.use(express.json({}));
    this.app.use(express.urlencoded({ extended: false }));

    this.routes.forEach(({ path, router }) => {
      this.app.use(path, router);
    });

    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: err.message });
      },
    );
  }

  start() {
    this.httpServer.listen(this.port);
    console.log(chalk.green(`Сервер запущен на порту ${this.port}`));
  }

  getHttpServer(): HttpServer {
    return this.httpServer;
  }
}
