import express from 'express';
const router = express.Router();
import { createBanker } from '../controllers/bacnkerController';
router.post('/api/banker', createBanker);

export default router;
