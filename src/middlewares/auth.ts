import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export interface IUser {
  id: string;
  role: string;
  iat: number;
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "You are not allowed to access this route ! ",
      });
    }

    token = token.split(" ")[1];

    const user = jwt.verify(token, process.env.JWT_SECRET as string) as IUser;

    res.locals.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "You are not allowed to access this route ! ",
    });
  }
};

export const authorize =
  (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user as IUser;
    if (user.role !== role) {
      return res
        .status(403)
        .json({ message: "You are not allowed to access this route ! " });
    }
    next();
  };
