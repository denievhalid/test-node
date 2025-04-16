import { AdapterTypes, createApp, ServerFactory } from "@/core";
import { getEnv } from "@/utils";

createApp(
  ServerFactory.get(getEnv("SERVER") as AdapterTypes, {
    port: getEnv("PORT"),
  }),
).start();
