import { MessageService } from "@/domain/message";
import type { Request, Response } from "express";

export class MessageController {
  constructor(private messageService: MessageService) {}

  async create(req: Request, res: Response) {
    const message = await this.messageService.create(req.body);
    return res.status(200).json(message);
  }

  async findAll(req: Request, res: Response) {
    const messages = await this.messageService.findAll();
    return res.status(200).json({ messages });
  }
}
