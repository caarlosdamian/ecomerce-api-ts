import { Request, Response } from 'express';
import { createProduct, getAllProducts } from '../service/produc.service';
import { CreateProductInput } from '../schema/product.schema';
import Category from '../model/category.model';
import Product from '../model/product.model';

export const createProductHandler = async (
  req: Request<{}, {}, CreateProductInput>,
  res: Response
) => {
  try {
    const { category, ...rest } = req.body;
    const body = { ...rest } as CreateProductInput;
    const product = await createProduct(body);

    const categorydb = await Category.findOneAndUpdate(
      { name: { $regex: new RegExp(`^${category}$`, 'i') } },
      { $setOnInsert: { name: category }, $push: { products: product._id } },
      { upsert: true, new: true }
    );

    const newProduct = await Product.findByIdAndUpdate(
      product._id,
      { category: categorydb._id },
      { new: true }
    );

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getAllProductsHandler = async (_: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error);
  }
};
