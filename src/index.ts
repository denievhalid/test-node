import {
  Factory,
  createApp,
  type ServerAdapterTypes,
  type DatabaseAdapterTypes,
} from "@/core";
import { getRoutes } from "@/routes";
import { getEnv } from "@/utils";

const database = Factory.getDatabase(
  getEnv("DATABASE") as DatabaseAdapterTypes,
  {
    url: getEnv("DB_URL"),
  },
);

const server = Factory.getServer(getEnv("SERVER") as ServerAdapterTypes, {
  port: getEnv("PORT"),
  routes: getRoutes(),
});

createApp({ database, server }).start();
