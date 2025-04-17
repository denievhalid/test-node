import mongoose, { Schema } from "mongoose";
import type { MessageEntity } from "@/domain/message";

const MessageSchema: Schema = new Schema({
  message: { type: String, required: true },
});

export const MessageModel = mongoose.model<MessageEntity>(
  "Message",
  MessageSchema,
);
