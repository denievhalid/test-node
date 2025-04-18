import { MessageService } from "@/domain/message";
import type { Request, Response } from "express";

export class MessageController {
  constructor(private messageService: MessageService) {}

  async buffer(req: Request, res: Response) {
    await this.messageService.buffer(req.body);
    return res.sendStatus(201);
  }

  async findAll(req: Request, res: Response) {
    const messages = await this.messageService.findAll();
    return res.status(200).json({ messages });
  }
}
