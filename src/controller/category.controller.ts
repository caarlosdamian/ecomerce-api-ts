import { Request, Response } from 'express';
import { CreateCategoryInput } from '../schema/category.schema';
import connectToDb from '../utils/connectToDb';
import { createCategory } from '../service/category.service';

export const getAllCategoriesHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
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
