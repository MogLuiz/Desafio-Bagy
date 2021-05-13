import { createConnection } from 'typeorm';

export default async (): Promise<void> => {
  const connection = createConnection()
  await (await connection).synchronize();
};
