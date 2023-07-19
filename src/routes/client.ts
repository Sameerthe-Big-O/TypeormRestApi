import express from 'express';
const router = express.Router();
import {
  createClient,
  getAllClient,
  getSingleClient,
  getByBalance,
} from '../controllers/clientsController';

//*get rotues *//
router.post('/api/client', createClient);
router.get('/api/client/', getAllClient);
router.get('/api/client/:clientId', getSingleClient);
router.get('/api/client/balance/:balance', getByBalance);

//*put and patch routes *//
router.put('/api/client/:clientId', getSingleClient);

//*delete routes *//

router.delete('/api/client/:clientId', getSingleClient);
export default router;
