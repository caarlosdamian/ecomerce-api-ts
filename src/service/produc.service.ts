import Product from '../model/product.model';
import { CreateProductInput } from '../schema/product.schema';

export const createProduct = (body: CreateProductInput) => {
  return Product.create(body);
};
