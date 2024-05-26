import { Router } from 'express';
import {
  createCategoryHandler,
  getAllCategoriesHandler,
} from '../controller/category.controller';
import validateResourse from '../middleware/validateResourse';
import { createCategorySchema } from '../schema/category.schema';

const router = Router();

router.get('/', getAllCategoriesHandler);
router.post('/', validateResourse(createCategorySchema), createCategoryHandler);

export default router;
