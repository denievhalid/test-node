import mongoose, { Connection } from "mongoose";
import { Database, type DatabaseOptions } from "@/core";

export class Mongo implements Database {
  private readonly db: Connection;
  private readonly url: string;

  constructor(options: DatabaseOptions) {
    const { url } = options;

    this.db = mongoose.connection;
    this.url = url;
  }

  async connect() {
    await mongoose.connect(this.url);
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }

  isConnected(): boolean {
    return this.db.readyState === 1;
  }

  get connection(): Connection {
    return this.db;
  }
}
