import { Router } from 'express';
import Categoryrouter from './category.routes';

const router = Router();
router.use('/api/category', Categoryrouter);

export default router;
