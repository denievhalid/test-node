import { createContainer, asClass } from "awilix";
import { MessageService } from "@/domain/message";

export const container = createContainer();

export { createContainer };

container.register({
  messageService: asClass(MessageService).scoped(),
});
