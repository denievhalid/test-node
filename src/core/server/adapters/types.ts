import type { Router } from "express";

export type ServerAdapterTypes = "express" | "koa";

export type ServerRoute = {
  path: string;
  router: Router;
};

export type ServerOptions = {
  port: string;
  routes: ServerRoute[];
};
