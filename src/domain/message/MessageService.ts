import { MessageRepository, type MessageEntity } from "@/domain/message";

export class MessageService {
  private repository: MessageRepository = new MessageRepository();

  async create(message: MessageEntity) {
    return this.repository.create(message);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
