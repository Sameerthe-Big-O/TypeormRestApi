import { DataSource } from 'typeorm';
import { dbConfig } from '../config/dbConfig';
import { Client } from '../entiteis/client';
import { Banker } from '../entiteis/banker';
import { Transactions } from '../entiteis/transactions';
export const AppDataSource = new DataSource({
  type: 'postgres',
  port: dbConfig.dbPort,
  host: dbConfig.host,
  username: dbConfig.userName,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: true,
  logging: true,
  entities: [Client, Banker, Transactions],
  migrations: [],
});
