import { Router } from 'express';
import {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
} from '../controller/product.controller';
import validateResourse from '../middleware/validateResourse';
import {
  createProductSchema,
  getProductByIdSchema,
  updateProductSchema,
} from '../schema/product.schema';

const router = Router();

router.post('/', validateResourse(createProductSchema), createProductHandler);
router.get('/', getAllProductsHandler);
router.get(
  '/:id',
  validateResourse(getProductByIdSchema),
  getProductByIdHandler
);
router.patch(
  '/:id',
  validateResourse(updateProductSchema),
  updateProductHandler
);

export default router;
