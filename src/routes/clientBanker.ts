import express from 'express';
const router = express.Router();
import { createClientBanker } from '../controllers/clientBankerController';
router.put('/api/banker/:bankerid/client/:clientid', createClientBanker);

export default router;
