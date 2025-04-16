import express from "express";
import { Server } from "@/core";
import type { ServerOptions } from "./types";

export class ExpressServer implements Server {
  private readonly app: express.Application;
  private readonly port: number;

  constructor(options: ServerOptions) {
    this.port = options.port;
    this.app = express();
  }

  start() {
    this.app.listen(this.port);
  }
}
