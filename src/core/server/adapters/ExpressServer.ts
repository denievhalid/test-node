import express from "express";
import { Server, type ServerOptions } from "@/core";
import { createServer, Server as HttpServer } from "http";

export class ExpressServer implements Server {
  private readonly app: express.Application;
  private readonly httpServer: HttpServer;
  private readonly port: string;

  constructor(options: ServerOptions) {
    this.port = options.port;
    this.app = express();
    this.httpServer = createServer(this.app);

    this.init();
  }

  init() {
    this.app.use((req, res, next) => {
      res.removeHeader("X-Powered-By");
      next();
    });

    this.app.use(express.json({}));
    this.app.use(express.urlencoded({ extended: false }));
  }

  start() {
    this.httpServer.listen(this.port);
  }

  getHttpServer(): HttpServer {
    return this.httpServer;
  }
}
