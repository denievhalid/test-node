import { MongoClient } from "mongodb";
import { type Database, type DatabaseOptions } from "@/core";
import { logger } from "@/utils";

export class Mongo implements Database {
  private client: MongoClient;
  private readonly url: string;

  constructor(options: DatabaseOptions) {
    const { url } = options;
    this.url = url;
    this.client = new MongoClient(this.url);
  }

  async connect() {
    try {
      await this.client.connect();
      logger.info("Соединение с базой данных установлено");
    } catch (error) {
      logger.error("Не удалось подключиться к базе данных", error);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.close();
      logger.warn("Соединение с базой данных закрыто");
    } catch (error) {
      logger.error("Ошибка при закрытии соединения:", error);
    }
  }
}
