import { Router } from 'express';
import { createProductHandler } from '../controller/product.controller';
import validateResourse from '../middleware/validateResourse';
import { createProductSchema } from '../schema/product.schema';

const router = Router();

router.post('/', validateResourse(createProductSchema), createProductHandler);

export default router;
