import { Router } from "express";
import { CreateUserValidator } from "../../validators/UserValidator";
import { CreateUserController } from "../controllers/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post(
  "/register",
  CreateUserValidator,
  createUserController.createUser
);

export default userRoutes;
