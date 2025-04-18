import { MessageRepository, type MessageEntity } from "@/domain/message";

const BUFFER_MAX_VALUES = 10;
const TIMEOUT_DELAY = 1000;

export class MessageService {
  private messageBuffer: MessageEntity[] = [];

  constructor(private readonly repository: MessageRepository) {}

  async buffer(message: MessageEntity) {
    this.messageBuffer.push(message);

    const createMessages = async () => {
      await this.create(message);
      this.messageBuffer = [];
    };

    const timeoutPromise = new Promise<void>((resolve) => {
      setTimeout(async () => {
        await createMessages();
        resolve();
      }, TIMEOUT_DELAY);
    });

    const bufferPromise = new Promise<void>((resolve) => {
      if (this.messageBuffer.length >= BUFFER_MAX_VALUES) {
        this.create(message).then(() => {
          resolve();
        });
      }
    });

    await Promise.race([timeoutPromise, bufferPromise]);
  }

  async create(message: MessageEntity) {
    return this.repository.create(message);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
