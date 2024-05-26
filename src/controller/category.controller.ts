import { Request, Response } from 'express';
import { CreateCategoryInput } from '../schema/category.schema';
import connectToDb from '../utils/connectToDb';
import { createCategory, getAllCategories } from '../service/category.service';

export const getAllCategoriesHandler = async (req: Request, res: Response) => {
  try {
    connectToDb();
    const categories = await getAllCategories();
    return res.json(categories).status(200);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createCategoryHandler = async (
  req: Request<{}, {}, CreateCategoryInput>,
  res: Response
) => {
  try {
    await connectToDb();
    const category = await createCategory(req.body);

    return res.send(category).status(201);
  } catch (error) {
    return res.status(500).send(error);
  }
};
