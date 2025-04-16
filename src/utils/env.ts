import dotenv from "dotenv";
import invariant from "tiny-invariant";
import { isUndefined } from "@/utils";

dotenv.config();

export const getEnv = (key: string): string => {
  const value = process.env[key] as string;

  invariant(
    isUndefined(value),
    `Не удалось найти переменную окружения : ${key}`,
  );

  return value;
};
