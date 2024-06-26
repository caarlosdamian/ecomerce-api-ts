import { Request, Response } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../service/product.service';
import {
  CreateProductInput,
  DeleteProductInput,
  GetProductByIdInput,
  UpdateProductInput,
} from '../schema/product.schema';
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

export const getProductByIdHandler = async (
  req: Request<GetProductByIdInput>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const product = await getProductById({ id });
    if (!product) return res.status(404).json({ mssg: 'Product not found' });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const updateProductHandler = async (
  req: Request<UpdateProductInput['params'], {}, UpdateProductInput['body']>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const product = await getProductById({ id });
    if (!product) return res.status(404).json({ mssg: 'Product not found' });
    const newProduct = await updateProduct({ id, body: req.body });
    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductHandler = async (
  req: Request<DeleteProductInput>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const product = await getProductById({ id });
    if (!product) return res.status(404).json({ mssg: 'Product not found' });
    await deleteProduct({ id });
    return res.status(200).json({ mssg: 'Product succesfully deleted' });
  } catch (error) {
    console.log(error);
  }
};
