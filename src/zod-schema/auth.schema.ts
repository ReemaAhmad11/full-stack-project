import { z } from "zod";

export const providerRegisterSchema = z.object({
  body: z.object({
    fullname: z
      .string({
        required_error: "Name is required! ",
        invalid_type_error: "Name most be String!",
      })
      .min(3, "Name most be mare than 3 char")
      .max(20, "Name most be less than 20 char"),
    username: z
      .string({
        required_error: "Username is required! ",
        invalid_type_error: "Username most be String!",
      })
      .min(3, "Name most be mare than 3 char")
      .max(10, "Name most be less than 10 char"),
    password: z
      .string({
        required_error: "Password is required! ",
        invalid_type_error: "Password most be String!",
      })
      .min(6, "Password most be more than 6 ")
      .max(15, "Password most be less than 15"),
    email: z
      .string({
        required_error: "Email is required!",
        invalid_type_error: "Password most be String!",
      })
      .email("Please enter a valid email"),
    phone: z
      .string({
        required_error: "Phone is required!",
        invalid_type_error: "Phone most be String!",
      })
      .min(10, "Phone number most be 10")
      .max(10, "Phone number most be 10"),
    permission: z.number({
      required_error: "Permission is required!",
      invalid_type_error: "Permission most be a Number!",
    }),
    projectName: z
      .string({
        required_error: "Project Name is required!",
        invalid_type_error: "Project Name most be String!",
      })
      .min(3, "Project Name most be more than 3 char")
      .max(15, "Project Name most be less than 15 char"),
  }),
});

export const userRegisterSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "Username is required! ",
        invalid_type_error: "Username most be String!",
      })
      .min(3, "Name most be mare than 3 char")
      .max(10, "Name most be less than 10 char"),
    password: z
      .string({
        required_error: "Password is required! ",
        invalid_type_error: "Password most be String!",
      })
      .min(6, "Password most be more than 6 ")
      .max(15, "Password most be less than 15"),
    email: z
      .string({
        required_error: "Email is required!",
        invalid_type_error: "Password most be String!",
      })
      .email("Please enter a valid email"),
    phone: z
      .string({
        required_error: "Phone is required!",
        invalid_type_error: "Phone most be String!",
      })
      .min(10, "Phone number most be 10")
      .max(10, "Phone number most be 10"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Username is required!",
      invalid_type_error: "Username most be String!",
    }),
    password: z.string({
      required_error: "Password is required!",
      invalid_type_error: "Password most be String!",
    }),
  }),
});
