import { Router } from 'express';
import {
  createProductHandler,
  getAllProductsHandler,
} from '../controller/product.controller';
import validateResourse from '../middleware/validateResourse';
import { createProductSchema } from '../schema/product.schema';

const router = Router();

router.post('/', validateResourse(createProductSchema), createProductHandler);
router.get('/', getAllProductsHandler);

export default router;
