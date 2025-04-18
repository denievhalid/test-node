import { Database, Server, WebSocket, type AppOptions } from "@/core";
import { logger } from "@/utils";

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

        this.database.watch("messages").on("data", (change: any) => {
          if (change.operationType === "insert") {
            this.ws.broadcast(
              JSON.stringify({
                event: "new-message",
                data: change.fullDocument,
              }),
            );
          }
        });
      })
      .catch(this.close);
  }

  close() {
    logger.warn("Приложение остановлено");
    process.exit(1);
  }
}

export function createApp(options: AppOptions) {
  return new App(options);
}
