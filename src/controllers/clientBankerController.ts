import { Request, Response } from 'express';
import { clientBankerService } from '../services/clientBankService';
export const createClientBanker = async (req: Request, res: Response) => {
  try {
    const { clientid, bankerid } = req.params;
    const data = await clientBankerService.createBankerClient(
      clientid,
      bankerid
    );
    res.status(200).send(data);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
