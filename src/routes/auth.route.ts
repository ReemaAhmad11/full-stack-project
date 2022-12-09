import express from "express";
import validate from "../middlewares/validate";
import {
  loginSchema,
  providerRegisterSchema,
  userRegisterSchema,
} from "../zod-schema/auth.schema";

const router = express.Router();

router.post("/userRegister", validate(userRegisterSchema));
router.post("/providerRegister", validate(providerRegisterSchema));
router.post("login", validate(loginSchema));

export default router;
