import invariant from "tiny-invariant";

export const getEnv = (key: string): string => {
  const value = process.env[key] as string;

  invariant(!value, `Не удалось найти переменную окружения : ${key}`);

  return value;
};
