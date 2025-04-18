import { Collection, MongoClient } from "mongodb";
import { type Database, type DatabaseOptions } from "@/core";
import { logger } from "@/utils";

export class Mongo implements Database {
  private client: MongoClient;
  private readonly name: string;
  private readonly url: string;

  constructor(options: DatabaseOptions) {
    const { name, url } = options;
    this.name = name;
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

  async listDatabases() {
    const { databases } = await this.client.db().admin().listDatabases();
    return databases;
  }

  async getCollection(name: string) {
    return this.client
      .db(this.name)
      .collection(name)
      .find()
      .toArray()
      .then((data) => data);
  }

  watch(collection: string, pipeline: object[] = [], options: object = {}) {
    return this.client
      .db(this.name)
      .collection(collection)
      .watch(pipeline, options);
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
