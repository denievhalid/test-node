import { createApp, ExpressServer } from "@/core";
import { getEnv } from "@/utils";

const express = new ExpressServer({ port: getEnv("PORT") });

createApp(express).start();
