import { Router } from 'express';
import {
  createCategoryHandler,
  getAllCategoriesHandler,
  updateCategoryHandler,
} from '../controller/category.controller';
import validateResourse from '../middleware/validateResourse';
import {
  createCategorySchema,
  updateCategorySchema,
} from '../schema/category.schema';

const router = Router();

router.get('/', getAllCategoriesHandler);
router.post('/', validateResourse(createCategorySchema), createCategoryHandler);
router.patch(
  '/:id',
  validateResourse(updateCategorySchema),
  updateCategoryHandler
);

export default router;
