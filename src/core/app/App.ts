import { Database, Server, WebSocket } from "@/core";
import type { AppOptions } from "@/core/app/types";

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
    this.server.start();
  }
}

export function createApp(options: AppOptions) {
  return new App(options);
}
