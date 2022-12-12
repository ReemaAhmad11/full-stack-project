import { z } from "zod";

export const Item = z.object({
  body: z.object({
    productName: z
      .string({
        required_error: "Product name of prodect is required! ",
        invalid_type_error: "Product name  most be String!",
      })
      .min(10, "Product name most be mare than 10 char")
      .max(20, "Product name most be less than 20 char"),

    productDescription: z
      .string({
        required_error: "Product description is required! ",
        invalid_type_error: "Product description most be String!",
      })
      .min(15, "Product description most be mare than 15 char")
      .max(25, "Product description most be less than 25 char"),

    productPrice: z.number({
      required_error: "Product price is required! ",
      invalid_type_error: "Product price most be String!",
    }),
    productType: z.enum([
      "Sweets",
      "Traditionals",
      "MainDishes",
      "Drinks",
      "Healthy",
      "Appetizers",
    ]),
    Image: z.string().nullish(),
  }),
});

export const deletePostSchema = z.object({
  params: z.object({
    itemid: z.string({
      required_error: "ID is required !",
      invalid_type_error: "Item id must be a string",
    }),
  }),
});

export const updatePostSchema = z.object({
  body: z.object({
    productName: z
      .string({
        required_error: "product name of prodect is required! ",
        invalid_type_error: "product name  most be String!",
      })
      .min(3, "product name most be mare than 3 char")
      .max(20, "product name most be less than 20 char"),

    productDescription: z
      .string({
        required_error: " Description is required! ",
        invalid_type_error: " Description most be String!",
      })
      .min(15, "Description most be mare than 15 char")
      .max(25, "Description most be less than 25 char"),

    productPrice: z.number(),
    productType: z.enum([
      "Switte ",
      "Traditional",
      " MainDishes",
      "Drinks",
      "Healthy",
      "Appetizers",
    ]),
    Image: z.string().nullish(),
  }),
});

export const updateByIDSchema = z.object({
  params: z.object({
    id: z.string({
      required_error: "ID is required !",
      invalid_type_error: "Item id must be a string",
    }),
  }),
});

export type deletePostSchemaType = z.infer<typeof deletePostSchema>["params"];

export type updatePostSchemaType = z.infer<typeof updateByIDSchema>["params"];
