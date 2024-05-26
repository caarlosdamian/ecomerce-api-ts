import { Request, Response } from 'express';
import {
  CreateCategoryInput,
  DeleteCategoryInput,
  GetCategoryByIdInput,
} from '../schema/category.schema';
import connectToDb from '../utils/connectToDb';
import {
  createCategory,
  deleteCategory,
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
export const getCategoryByIdHandler = async (
  req: Request<GetCategoryByIdInput>,
  res: Response
) => {
  try {
    const { id } = req.params;
    await connectToDb();
    const category = await getCategoryById({ id });
    if (!category) return res.status(404).json('Category not found');
    return res.json(category).status(200);
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

export const deleteCategoryHandler = async (
  req: Request<DeleteCategoryInput>,
  res: Response
) => {
  const { id } = req.params;
  try {
    await connectToDb();
    const category = await getCategoryById({ id });
    if (!category) return res.status(404).json('Category not found');
    const prueba = await deleteCategory({ id: category._id });
    console.log('prueba', prueba);
    return res.status(200).json('Category deleted succesfully');
  } catch (error) {}
};
