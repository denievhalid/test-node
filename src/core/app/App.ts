import type { AppOptions } from "@/core/app/types";
import type { Database, Server } from "@/core";

class App {
  private database: Database;
  private server: Server;

  constructor(options: AppOptions) {
    const { database, server } = options;

    this.database = database;
    this.server = server;
  }

  start() {
    this.server.start();
  }
}

export function createApp(options: AppOptions) {
  return new App(options);
}
