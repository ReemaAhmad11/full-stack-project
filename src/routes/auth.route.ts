import express from "express";
import {
  getAllProvider,
  getAllUsers,
  loginHandler,
  providerRegisterHandler,
  userRegisterHandler,
} from "../controller/auth.controller";
import { authorize, protect } from "../middlewares/auth";
import validate from "../middlewares/validate";
import { loginSchema, userRegisterSchema } from "../zod-schema/auth.schema";

const router = express.Router();

router.post(
  "/userRegister",
  validate(userRegisterSchema),
  userRegisterHandler
);
router.post(
  "/providerRegister",
  validate(userRegisterSchema),
  providerRegisterHandler
);

// router.get("/users", protect, getAllUsers);
router.get(
  "/visitor",
  protect,
  authorize("Visitor"),
  validate(loginSchema),
  authorize("Provider"),

  loginHandler
);
router.post("/login", validate(loginSchema), loginHandler);

router.get("/visitor", protect, validate(loginSchema), getAllUsers);
router.get("/users", getAllUsers);

router.get(
  "/provider",
  protect,
  authorize("Provider"),
  validate(loginSchema),
  getAllProvider
);

export default router;
