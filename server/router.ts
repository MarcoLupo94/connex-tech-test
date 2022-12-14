import express, { Router } from 'express';
import { getTime } from './controller';
const router: Router = express.Router();

router.get('/time', getTime);

export default router;
