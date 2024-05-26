import { Request, Response } from 'express';
import { CreateCategoryInput } from '../schema/category.schema';
import connectToDb from '../utils/connectToDb';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from '../service/category.service';

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

export const updateCategoryHandler = async (
  req: Request<{ id: string }, {}, CreateCategoryInput>,
  res: Response
) => {
  try {
    const { id } = req.params;
    await connectToDb();

    const category = await getCategoryById({ id });
    if (!category) return res.status(401).send('Category not found');
    
    const newCategory = await updateCategory({
      id: category._id,
      body: req.body,
    });

    return res.send(newCategory).status(201);
  } catch (error) {
    return res.status(500).send(error);
  }
};
