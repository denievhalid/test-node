import {
  AdapterTypes,
  ExpressServer,
  Server,
  type ServerOptions,
} from "@/core";

export class ServerFactory {
  static get(adapter: AdapterTypes, options: ServerOptions): Server {
    switch (adapter) {
      case "express":
        return new ExpressServer(options);
      default:
        throw new Error(`Unsupported adapter type: ${adapter}`);
    }
  }
}
