import { Client } from '../entiteis/client';
import { AppDataSource } from '../loaders/db';

export interface client {
  first_name: string;
  last_name: string;
  email: string;
  card_number: string;
  balance: number;
}

const clientRepo = AppDataSource.getRepository(Client);
export const clientService = {
  createClient: async (data: client) => {
    try {
      //*here the create doesn't really creates it just creates the object but don't actually save it

      const createdClient = clientRepo.save(data);

      return createdClient;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  getAllClients: async () => {
    try {
      //*here the create doesn't really creates it just creates the object but don't actually save it

      const createdClient = await clientRepo
        .createQueryBuilder()
        .select('client')
        .from(Client, 'client')
        .where('client.id = :id', { id: 1 })
        .getOne();
      return createdClient;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  getSingleClient: async (id: string) => {
    try {
      //*here the create doesn't really creates it just creates the object but don't actually save it

      const createdClient = await clientRepo
        .createQueryBuilder()
        .select('client.first_name')
        .addSelect('client.last_name')
        .addSelect('client.balance')
        .from(Client, 'client')
        .where('client.id = :id', { id: Number(id) })
        .getOne();

      return createdClient;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },

  getByBalance: async (balance: string) => {
    try {
      //*here the create doesn't really creates it just creates the object but don't actually save it

      const createdClient = await clientRepo
        .createQueryBuilder()
        .select('client.first_name')
        .addSelect('client.last_name')
        .addSelect('client.balance')
        .from(Client, 'client')
        .where('client.balance > :balance', { balance: balance })
        .getMany();

      return createdClient;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

// .createQueryBuilder()
// .select('client')
// .from(Client, 'client')
// .getMany();

//!  const createdClient = await clientRepo to select the multiples fields
// .createQueryBuilder()
// .select('client.first_name')
// .addSelect('client.last_name')
// .addSelect('client.balance')
// .from(Client, 'client')
// .where('client.id = :id', { id: Number(id) })
// .getOne();
