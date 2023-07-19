import { Request, Response } from 'express';
import { bankerService } from '../services/bankerService';
export const createBanker = async (req: Request, res: Response) => {
  try {
    const data = await bankerService.createBanker(req.body);
    res.status(200).send(data);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
