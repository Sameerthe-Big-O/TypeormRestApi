import { Transactions, TransactionsTypes } from '../entiteis/transactions';
import { AppDataSource } from '../loaders/db';
import { Client } from '../entiteis/client';
export interface transaction {
  type: TransactionsTypes;
  amount: number;
}

const transRepo = AppDataSource.getRepository(Transactions);
const clientRepo = AppDataSource.getRepository(Client);
export const transactionService = {
  createTransaction: async (id: string, data: transaction) => {
    try {
      const { amount, type } = data;

      const client = await clientRepo.findOne({
        where: { id: Number(id) },
      });

      if (!client) throw new Error('client not exist on this');

      const transaction = transRepo.create({
        type: type,
        amount: amount,
        client: client,
      });

      const createtransaction = await transRepo.save(transaction);

      if (type === TransactionsTypes.DESPOSIT) {
        client.balance = client.balance + amount;
      } else if (type === TransactionsTypes.WITHDRAW) {
        client.balance = client.balance - amount;
      }

      //*the main reason why we should use the baseentity intead of the respository because it give us ability to directly perform operations without having the respository

      await clientRepo.save(client);
      return client;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};
