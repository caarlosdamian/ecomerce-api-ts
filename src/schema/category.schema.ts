import { object, optional, string, TypeOf } from 'zod';

export const createCategorySchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }).min(6, 'Name is to shoord - should be min 6 chard'),

    categoryimg: string({
      required_error: 'Photo is required',
    }),
  }),
});

export const updateCategorySchema = object({
  body: object({
    name: string()
      .min(6, 'Name is to shoord - should be min 6 chard')
      .optional(),

    categoryimg: string().optional(),
  }).optional(),
});

export const deleteCategorySchema = object({
  params: object({
    id: string(),
  }),
});

export const getCategoryByIdCategorySchema = object({
  params: object({
    id: string(),
  }),
});

export type CreateCategoryInput = TypeOf<typeof createCategorySchema>['body'];
export type UpdateCategoryInput = TypeOf<typeof updateCategorySchema>['body'];
export type DeleteCategoryInput = TypeOf<typeof deleteCategorySchema>['params'];
export type GetCategoryByIdInput = TypeOf<typeof getCategoryByIdCategorySchema>['params'];
