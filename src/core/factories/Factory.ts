import {
  Database,
  ExpressServer,
  Mongo,
  type DatabaseAdapterTypes,
  type ServerAdapterTypes,
  type ServerOptions,
  type Server,
  type DatabaseOptions,
} from "@/core";

export class Factory {
  static getServer(
    adapter: ServerAdapterTypes,
    options: ServerOptions,
  ): Server {
    switch (adapter) {
      case "express":
        return new ExpressServer(options);
      default:
        throw new Error(`Unsupported server adapter type: ${adapter}`);
    }
  }

  static getDatabase(
    adapter: DatabaseAdapterTypes,
    options: DatabaseOptions,
  ): Database {
    switch (adapter) {
      case "mongo":
        return new Mongo(options);
      default:
        throw new Error(`Unsupported database adapter type: ${adapter}`);
    }
  }
}
