import { Schema, model, models, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  categoryimg: string;
  products: Schema.Types.ObjectId[];
}

export const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    categoryimg: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true }
);

const Category = models.Category || model('Category', CategorySchema);

export default Category;
