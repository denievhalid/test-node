import { MessageService } from "@/domain/message";
import type { Request, Response } from "express";

const messageService = new MessageService();

export class MessageController {
  static async create(req: Request, res: Response) {
    const message = await messageService.create(req.body);
    return res.status(200).json(message);
  }

  static async findAll(req: Request, res: Response) {
    const messages = await messageService.findAll();
    return res.status(200).json({ messages });
  }
}
