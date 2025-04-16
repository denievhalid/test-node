import { WebSocketServer } from "ws";
import { Server } from "http";

export class WebSocket {
  private ws: WebSocketServer;

  constructor(server: Server) {
    this.ws = new WebSocketServer({ server });
  }
}
