import express from "express";
import {
  addItemHandler,
  deleteItemHandler,
  getAllItemHandler,
  updateItemHandler,
} from "../controller/item.controller";
import { protect } from "../middlewares/auth";
import validate from "../middlewares/validate";
import {
  Item,
  deletePostSchema,
  updatePostSchema,
} from "../zod-schema/item.schema";

const router = express.Router();

router.get("/", protect, getAllItemHandler);
router.post("/", protect, addItemHandler);
router.put("/:itemid", protect, validate(updatePostSchema), updateItemHandler);
router.delete(
  "/:itemid",
  protect,
  validate(deletePostSchema),
  deleteItemHandler
);

export default router;
