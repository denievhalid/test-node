import { Router } from "express";
import { makeInvoker } from "awilix-express";
import { MessageController } from "@/domain";

const router = Router();
const api = makeInvoker<MessageController>((cradle) => {
  console.log(typeof cradle.messageRepository);
  return cradle.messageController;
});

router.get("/", api("findAll"));
router.post("/", api("buffer"));

export const getRoutes = () => [{ path: "/messages", router }];
