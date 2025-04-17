import {
  Factory,
  createApp,
  type ServerAdapterTypes,
  type DatabaseAdapterTypes,
} from "@/core";
import { getEnv } from "@/utils";
import { MessageController } from "@/domain/message";

const database = Factory.getDatabase(
  getEnv("DATABASE") as DatabaseAdapterTypes,
  {
    url: getEnv("DB_URL"),
  },
);

const server = Factory.getServer(getEnv("SERVER") as ServerAdapterTypes, {
  port: getEnv("PORT"),
  routes: [
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
  ],
});

createApp({ database, server }).start();
