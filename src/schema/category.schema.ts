import { object, string, TypeOf } from 'zod';

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

export type CreateCategoryInput = TypeOf<typeof createCategorySchema>['body'];
