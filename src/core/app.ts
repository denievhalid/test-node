import type { Express } from "express";

class App {
  constructor(private readonly express: Express) {}
}

export function createApp() {}
