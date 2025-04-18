import { createContainer, asClass } from "awilix";
import { MessageController, MessageService, MessageRepository } from "@/domain";

export const container = createContainer();

container.register({
  messageRepository: asClass(MessageRepository).scoped(),
  messageService: asClass(MessageService).scoped(),
  messageController: asClass(MessageController).scoped(),
});
