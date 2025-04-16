import {
  Factory,
  createApp,
  type ServerAdapterTypes,
  type DatabaseAdapterTypes,
} from "@/core";
import { getEnv } from "@/utils";

const database = Factory.getDatabase(
  getEnv("DATABASE") as DatabaseAdapterTypes,
  {
    url: getEnv("DB_URL"),
  },
);

const server = Factory.getServer(getEnv("SERVER") as ServerAdapterTypes, {
  port: getEnv("PORT"),
});

createApp({ database, server }).start();
