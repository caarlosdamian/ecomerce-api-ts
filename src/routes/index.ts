import { Router } from 'express';
import categoryRouter from './category.routes';
import productRouter from './product.routes';

const router = Router();
router.use('/api/category', categoryRouter);
router.use('/api/product', productRouter);

export default router;
