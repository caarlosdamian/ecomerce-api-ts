import Product from '../model/product.model';
import {
  CreateProductInput,
  UpdateProductInput,
} from '../schema/product.schema';

export const createProduct = (body: CreateProductInput) => {
  return Product.create(body);
};

export const getAllProducts = () => {
  return Product.find({});
};

export const getProductById = ({ id }: { id: string }) => {
  return Product.findById(id);
};

export const updateProduct = (params: {
  id: string;
  body: UpdateProductInput['body'];
}) => {
  return Product.findByIdAndUpdate(params.id, params.body, { new: true });
};
export const deleteProduct = (params: { id: string }) => {
  return Product.findByIdAndDelete(params.id);
};
