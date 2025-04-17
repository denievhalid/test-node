import { Router } from "express";
import { makeInvoker } from "awilix-express";
import { MessageController } from "@/domain";

const router = Router();
const api = makeInvoker(MessageController);

router.get("/", api("findAll"));
router.post("/", api("create"));

export const getRoutes = () => [{ path: "/messages", router }];
