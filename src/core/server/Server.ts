import type { Server as HttpServer } from "http";

export interface Server {
  start: () => void;
  getHttpServer: () => HttpServer;
}
