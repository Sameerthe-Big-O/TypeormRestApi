import { Request, Response } from 'express';
import { clientService } from '../services/clientService';
export const createClient = async (req: Request, res: Response) => {
  try {
    const data = await clientService.createClient(req.body);
    res.send(data);
  } catch (err) {
    res.send({ error: err.message });
  }
};
export const getAllClient = async (req: Request, res: Response) => {
  try {
    const data = await clientService.getAllClients();
    res.send(data);
  } catch (err) {
    res.send({ error: err.message });
  }
};
export const getSingleClient = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;
    const data = await clientService.getSingleClient(clientId);
    res.send(data);
  } catch (err) {
    res.send({ error: err.message });
  }
};
export const getByBalance = async (req: Request, res: Response) => {
  try {
    const { balance } = req.params;
    const data = await clientService.getByBalance(balance);
    res.send(data);
  } catch (err) {
    res.send({ error: err.message });
  }
};
