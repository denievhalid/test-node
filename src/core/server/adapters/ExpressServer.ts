import express from "express";
import { Server } from "@/core";
import type { ServerOptions } from "./types";

export class ExpressServer implements Server {
  private readonly app: express.Application;
  private readonly port: string;

  constructor(options: ServerOptions) {
    this.port = options.port;
    this.app = express();

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
    this.app.listen(this.port);
  }
}
