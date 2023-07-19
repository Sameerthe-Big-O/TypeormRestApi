import express from 'express';
const router = express.Router();
import { createTransaction } from '../controllers/treansactionController';
router.post('/api/client/:clientId/transaction', createTransaction);

export default router;
