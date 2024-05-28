import { Router } from 'express';
import {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
} from '../controller/product.controller';
import validateResourse from '../middleware/validateResourse';
import {
  createProductSchema,
  getProductByIdSchema,
} from '../schema/product.schema';

const router = Router();

router.post('/', validateResourse(createProductSchema), createProductHandler);
router.get('/', getAllProductsHandler);
router.get(
  '/:id',
  validateResourse(getProductByIdSchema),
  getProductByIdHandler
);

export default router;
