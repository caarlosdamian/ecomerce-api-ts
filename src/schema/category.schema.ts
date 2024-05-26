import { object, optional, string, TypeOf} from 'zod';

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

export type CreateCategoryInput = TypeOf<typeof createCategorySchema>['body'];
export type UpdateCategoryInput = TypeOf<typeof updateCategorySchema>['body'];
