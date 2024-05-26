import { Schema, model, models, Document } from 'mongoose';
import { Gallery, Image, Include, Other } from '../types';

export interface IProduct extends Document {
  slug: string; // Producto
  name: string; // Producto
  image: Image; // Producto
  category: Schema.Types.ObjectId[]; // ref Categoria
  new: boolean; // Producto
  price: number; // Producto
  description: string; // Producto
  features: string; // Producto
  includes: Include[]; // Producto
  gallery: Gallery; // Producto
  others: Other[];
}

export const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }, // ref Categoria
    new: { type: Boolean, require: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    features: { type: String, required: true },
    includes: [
      {
        quantity: { type: Number, required: true },
        item: { type: String, required: true },
      },
    ],
    gallery: {
      first: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
      second: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
      third: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
    }, // Producto
    others: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        image: {
          mobile: { type: String, required: true },
          tablet: { type: String, required: true },
          desktop: { type: String, required: true },
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;
