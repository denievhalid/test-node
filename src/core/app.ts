import { Server } from "@/core";

class App {
  constructor(private readonly server: Server) {}

  start() {
    this.server.start();
  }
}

export function createApp(server: Server) {
  return new App(server);
}
