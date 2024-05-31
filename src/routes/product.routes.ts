import { Router } from 'express';
import {
  createProductHandler,
  deleteProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
} from '../controller/product.controller';
import validateResourse from '../middleware/validateResourse';
import {
  createProductSchema,
  deleteProductSchema,
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
router.delete(
  '/:id',
  validateResourse(deleteProductSchema),
  deleteProductHandler
);

export default router;
