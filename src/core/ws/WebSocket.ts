import chalk from "chalk";
import WS, { WebSocketServer } from "ws";
import { Server } from "http";
import { logger } from "@/utils";

export class WebSocket {
  private ws: WebSocketServer;
  private sockets: Set<WS> = new Set();

  constructor(server: Server) {
    this.ws = new WebSocketServer({ server });

    this.initListeners();
  }

  broadcast(msg: any) {
    for (const socket of this.getSockets()) {
      if (socket.readyState === WS.OPEN) {
        socket.send(msg);
      }
    }
  }

  initListeners() {
    this.ws.on("connection", (socket) => {
      this.sockets.add(socket);
      logger.info("Клиент подключился");

      socket.on("close", () => {
        this.sockets.delete(socket);
        logger.info("Клиент отключился");
      });
    });
  }

  getSockets() {
    return Array.from(this.sockets);
  }
}
