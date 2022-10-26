import { Router } from "express";
import { FindUserByEmailValidator } from "../../validators/FindUserByEmailValidator";
import { CreateUserValidator } from "../../validators/UserValidator";
import { CreateUserController } from "../controllers/CreateUserController";
import { FindUserByEmailController } from "../controllers/FindUserByEmailController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const findUserByEmailController = new FindUserByEmailController();

userRoutes.post(
  "/register",
  CreateUserValidator,
  createUserController.createUser
);

userRoutes.get(
  "/email/:email",
  FindUserByEmailValidator,
  findUserByEmailController.handle
);

export default userRoutes;
