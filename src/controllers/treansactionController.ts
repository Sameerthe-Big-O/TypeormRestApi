import { Request, Response } from 'express';
import { transactionService } from '../services/transactionsService';

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;
    const data = await transactionService.createTransaction(clientId, req.body);

    res.send(data);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
