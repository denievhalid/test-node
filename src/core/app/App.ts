import { Database, Server, WebSocket } from "@/core";
import type { AppOptions } from "@/core/app/types";
import * as process from "node:process";

class App {
  private database: Database;
  private server: Server;
  private ws: WebSocket;

  constructor(options: AppOptions) {
    const { database, server } = options;

    this.database = database;

    this.server = server;

    this.ws = new WebSocket(this.server.getHttpServer());
  }

  start() {
    this.database
      .connect()
      .then(() => {
        this.server.start();
      })
      .catch(this.close);
  }

  close() {
    process.exit(1);
  }
}

export function createApp(options: AppOptions) {
  return new App(options);
}
