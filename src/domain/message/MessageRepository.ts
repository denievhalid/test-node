import { MessageModel, type MessageEntity } from "@/domain/message";

export class MessageRepository {
  async create(message: MessageEntity) {
    return MessageModel.create(message);
  }

  async findAll() {
    return MessageModel.find();
  }
}
