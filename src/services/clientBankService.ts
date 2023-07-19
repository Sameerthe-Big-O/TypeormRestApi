import { Client } from '../entiteis/client';
import { AppDataSource } from '../loaders/db';
import { Banker } from '../entiteis/banker';

const clientRepo = AppDataSource.getRepository(Client);
const bankerRepo = AppDataSource.getRepository(Banker);
export const clientBankerService = {
  createBankerClient: async (clientid: string, bankerid: string) => {
    try {
      const client = await clientRepo.findOne({
        where: { id: Number(clientid) },
      });

      const banker = await bankerRepo.findOne({
        where: { id: Number(bankerid) },
      });
      if (banker && client) {
        banker.clients = [client];
        const adder = await bankerRepo.save(banker);
        return adder;
      }
      throw new Error(`banker or client not found`);
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

//*we can also do the same way like clients can have the many banker clients.banker=[banker] but the reason we did is because that banker has the jointabe decorator
// banker.clients = [...banker.clients, client];
//*the oen has the jointabke we do with that this

//
