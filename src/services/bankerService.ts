import { Banker } from '../entiteis/banker';
import { AppDataSource } from '../loaders/db';

export interface banker {
  first_name: string;
  last_name: string;
  email: string;
  card_number: string;
  employee_number: string;
}

const bankerRepo = AppDataSource.getRepository(Banker);
export const bankerService = {
  createBanker: async (data: banker) => {
    try {
      const banker = await bankerRepo.save(data);
      return banker;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};
