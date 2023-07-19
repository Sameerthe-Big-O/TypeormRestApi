import express from 'express';
const router = express.Router();
import { Client } from '../entiteis/client';
import { AppDataSource } from '../loaders/db';
const clientRepo = AppDataSource.getRepository(Client);

router.delete('/api/client/:clientid', async (req, res) => {
  const { clientid } = req.params;

  const deletObject = clientRepo.delete(Number(clientid));

  res.send(deletObject);
});

export default router;
