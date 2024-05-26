import Category from '../model/category.model';
import {
  CreateCategoryInput,
  UpdateCategoryInput,
} from '../schema/category.schema';

export const createCategory = (body: CreateCategoryInput) => {
  return Category.create(body);
};

export const getAllCategories = () => {
  return Category.find({});
};

export const updateCategory = (params: {
  id: string;
  body: UpdateCategoryInput;
}) => {
  return Category.findByIdAndUpdate(params.id, params.body, { new: true });
};

export const getCategoryById = ({ id }: { id: string }) => {
  return Category.findById(id);
};
