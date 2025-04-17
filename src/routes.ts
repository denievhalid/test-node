import { MessageController } from "@/domain/message";
import type { ServerRoute } from "@/core";

export const getRoutes = (): ServerRoute[] => [
  {
    method: "get",
    path: "/messages",
    handler: MessageController.findAll,
  },
  {
    method: "post",
    path: "/messages",
    handler: MessageController.create,
  },
];
