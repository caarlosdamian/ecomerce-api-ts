import { Router } from 'express';
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
} from '../controller/category.controller';
import validateResourse from '../middleware/validateResourse';
import {
  createCategorySchema,
  deleteCategorySchema,
  getCategoryByIdCategorySchema,
  updateCategorySchema,
} from '../schema/category.schema';

const router = Router();

router.delete(
  '/:id',
  validateResourse(deleteCategorySchema),
  deleteCategoryHandler
);
router.get(
  '/:id',
  validateResourse(getCategoryByIdCategorySchema),
  getCategoryByIdHandler
);
router.get('/', getAllCategoriesHandler);
router.post('/', validateResourse(createCategorySchema), createCategoryHandler);
router.patch(
  '/:id',
  validateResourse(updateCategorySchema),
  updateCategoryHandler
);

export default router;
