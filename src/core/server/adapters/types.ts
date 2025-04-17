import type { Request, Response } from "express";

export type ServerAdapterTypes = "express" | "koa";

export type ServerRoute = {
  handler: (req: Request, res: Response) => Promise<unknown>;
  path: string;
  method: "get" | "post" | "put" | "delete";
};

export type ServerOptions = {
  port: string;
  routes: ServerRoute[];
};
