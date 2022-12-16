import express from "express";
import {
  addItemHandler,
  deleteItemHandler,
  getAllItemByNameHandler,
  getAllItemHandler,
  updateItemHandler,
} from "../controller/item.controller";
import { authorize, protect } from "../middlewares/auth";
import validate from "../middlewares/validate";
import {
  Item,
  deletePostSchema,
  updatePostSchema,
} from "../zod-schema/item.schema";

const router = express.Router();

router.get("/", protect, authorize("Provider"), getAllItemHandler);
router.get("/:name", protect, authorize("Provider"), getAllItemByNameHandler);
router.post("/", protect, authorize("Provider"), addItemHandler);
router.put(
  "/:itemid",
  protect,
  authorize("Provider"),
  validate(updatePostSchema),
  updateItemHandler
);
router.delete(
  "/:itemid",
  protect,
  authorize("Provider"),
  validate(deletePostSchema),
  deleteItemHandler
);

export default router;
