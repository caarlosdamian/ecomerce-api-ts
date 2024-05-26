import Category from '../model/category.model';

export const createCategory = (params: {
  name: string;
  categoryimg: string;
}) => {
  return Category.create(params);
};

export const getAllCategories = () => {
  return Category.find({});
};
