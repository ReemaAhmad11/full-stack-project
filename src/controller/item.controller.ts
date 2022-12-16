import { Item, Type } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import { IUser } from "../middlewares/auth";
import {
  deletePostSchemaType,
  updatePostSchemaType,
} from "../zod-schema/item.schema";

export const getAllItemHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;

  const itemList = await prisma.item.findMany({
    where: { user_id: user.id },
  });
  // here is problem
  return res.status(200).json(itemList);
};
export const getAllItemByNameHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;

  const { name } = req.params;

  const type = name as Type;

  const itemList = await prisma.item.findMany({
    where: { productType: type },
  });
  // here is problem
  return res.status(200).json(itemList);
};

export const addItemHandler = async (req: Request, res: Response) => {
  const { productName, productDescription, productPrice, productType, Image } =
    req.body as Item;
  const user = res.locals.user as IUser;
  console.log("req.body", req.body);

  await prisma.item.create({
    data: {
      productName,
      productDescription,
      productPrice,
      productType,
      Image,
      user_id: user.id,
    },
  });

  return res.status(200).json({
    message: "New Item created",
  });
};

export const updateItemHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as IUser;
    const updatedItem = req.body as Item;
    const { itemid } = req.params as updatePostSchemaType;

    const isUpdated = await prisma.item.updateMany({
      where: {
        id: itemid,
        user_id: user.id,
      },
      data: updatedItem,
    });

    if (isUpdated.count == 0) {
      return res.status(400).json({
        message: "Invalid Item id",
      });
    }

    return res.status(200).json({
      message: "Item updated !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error !",
    });
  }
};

export const deleteItemHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;
  const { itemid } = req.params as deletePostSchemaType;

  const deleteCount = await prisma.item.deleteMany({
    where: {
      id: itemid,
      user_id: user.id,
    },
  });

  if (deleteCount.count == 0) {
    return res.status(400).json({
      message: "Invalid item id",
    });
  }

  return res.status(200).json({
    message: "Item deleted !",
  });
};
