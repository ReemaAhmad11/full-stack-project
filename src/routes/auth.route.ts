import express from "express";
import {
  loginHandler,
  providerRegisterHandler,
  userRegisterHandler,
} from "../controller/auth.controller";
import validate from "../middlewares/validate";
import {
  loginSchema,
  userRegisterSchema,
} from "../zod-schema/auth.schema";

const router = express.Router();

router.post("/userRegister", validate(userRegisterSchema), userRegisterHandler);
router.post(
  "/providerRegister",
  validate(userRegisterSchema),
  providerRegisterHandler
);
router.post("/login", validate(loginSchema), loginHandler);

export default router;
