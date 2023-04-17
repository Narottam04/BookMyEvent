import express from "express";
import { body } from "express-validator";
import { getAllUsers, user } from "../controllers/user";

export const userRoute = express.Router();

// create user
userRoute.post(
  "/",
  body("email").isEmail(),
  body("id").isString(),
  body("name").isString().isLength({ max: 30 }),
  user
);

// get user
userRoute.get("/", getAllUsers);

//
