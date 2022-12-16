import { User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const getAllusers = await prisma.user.findMany();
    return res.status(200).json(getAllusers);
  } catch (error) {
    return res.status(500).json({ message: "Server Error!" });
  }
};

export const getAllVisitor = async (req: Request, res: Response) => {
  try {
    const getAllusers = await prisma.user.findMany({
      where: {
        role: "Visitor",
      },
    });
    return res.status(200).json(getAllusers);
  } catch (error) {
    return res.status(500).json({ message: "Server Error!" });
  }
};

export const getAllProvider = async (req: Request, res: Response) => {
  try {
    const getAllusers = await prisma.user.findMany({
      where: {
        role: "Provider",
      },
    });
    return res.status(200).json(getAllusers);
  } catch (error) {
    return res.status(500).json({ message: "Server Error!" });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body as User;
  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user) {
    return res.status(400).json({ message: "Wrong username or password!" });
  }
  const isMatched = argon2.verify(user.password, password);

  if (!isMatched) {
    return res.status(400).json({ message: "Wrong username or password!" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET as string
  );
  return res.status(201).json({
    message: `Welcom Back ${user.username}`,
    token,
  });
};

export const userRegisterHandler = async (req: Request, res: Response) => {
  try {
    const { username, password, email, phone, role } = req.body as User;
    const hashedPassword = await argon2.hash(password);

    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        phone,
        role,
      },
    });

    return res.status(201).json({
      message: "User Created!",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Issue with your Input !",
    });
  }
};

export const providerRegisterHandler = async (req: Request, res: Response) => {
  try {
    const {
      fullname,
      username,
      password,
      email,
      phone,
      permission,
      projectName,
      role,
    } = req.body as User;
    const hashedPassword = await argon2.hash(password);
    await prisma.user.create({
      data: {
        fullname,
        username,
        password: hashedPassword,
        email,
        phone,
        permission,
        projectName,
        role,
      },
    });
    return res.status(201).json({
      message: "Provider Created!",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Issue with your input!",
    });
  }
};
