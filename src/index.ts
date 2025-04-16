import { createApp } from "@/core";
import { ExpressServer } from "@/core";

const express = new ExpressServer({ port: 5000 });

createApp(express).start();
