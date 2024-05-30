import { TypeOf, z } from 'zod';

const imageSchema = z.object({
  mobile: z.string({
    required_error: 'Mobile image URL is required',
  }),
  tablet: z.string({
    required_error: 'Tablet image URL is required',
  }),
  desktop: z.string({
    required_error: 'Desktop image URL is required',
  }),
});

const includeSchema = z.object({
  quantity: z.number({
    required_error: 'Quantity is required',
  }),
  item: z.string({
    required_error: 'Item is required',
  }),
});

const gallerySchema = z.object({
  first: imageSchema,
  second: imageSchema,
  third: imageSchema,
});

const otherSchema = z.object({
  slug: z.string({
    required_error: 'Slug is required',
  }),
  name: z.string({
    required_error: 'Name is required',
  }),
  image: imageSchema,
});

export const createProductSchema = z.object({
  body: z.object({
    slug: z.string({
      required_error: 'Slug is required',
    }),
    name: z.string({
      required_error: 'Name is required',
    }),
    image: imageSchema,
    category: z.string().optional(),
    new: z.boolean({
      required_error: 'New status is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    features: z.string({
      required_error: 'Features are required',
    }),
    includes: z.array(includeSchema),
    gallery: gallerySchema,
    others: z.array(otherSchema).optional(),
  }),
});

export const updateProductSchema = z.object({
  body: z.object({
    slug: z
      .string({
        required_error: 'Slug is required',
      })
      .optional(),
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    image: imageSchema.optional(),
    category: z.string().optional(),
    new: z
      .boolean({
        required_error: 'New status is required',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .optional(),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .optional(),
    features: z
      .string({
        required_error: 'Features are required',
      })
      .optional(),
    includes: z.array(includeSchema).optional(),
    gallery: gallerySchema.optional(),
    others: z.array(otherSchema).optional(),
  }),
  params: z.object({
    id: z.string({
      required_error: 'id is required',
    }),
  }),
});

export const getProductByIdSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: 'id is required',
      })
      .min(24),
  }),
});

export type GetProductByIdInput = TypeOf<typeof getProductByIdSchema>['params'];
export type CreateProductInput = TypeOf<typeof createProductSchema>['body'];
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
