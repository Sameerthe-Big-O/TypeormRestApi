import { AppDataSource } from './db';
import express from 'express';
import { dbConfig } from '../config/dbConfig';
import clientRouter from '../routes/client';

import bankerRouter from '../routes/banker';
import routerTransaction from '../routes/transactions';
import clientBankerRouter from '../routes/clientBanker';
import deleteRouter from '../routes/deleteClient';
const app = express();

export const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    '/',
    clientRouter,
    bankerRouter,
    routerTransaction,
    clientBankerRouter,
    deleteRouter
  );

  app.listen(dbConfig.port, () => {
    console.log(`🚀 server has started ~ ${dbConfig.port}`);
  });

  AppDataSource.initialize()
    .then(() => {
      console.log('Database has been initialized! 🌎  ');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });
};
