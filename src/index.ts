import { main } from './loaders/server';
import dotenv from 'dotenv';
dotenv.config();

const sever = async () => {
  await main();
};
sever();
