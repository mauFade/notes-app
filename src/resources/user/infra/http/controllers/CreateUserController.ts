import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUserService";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserController {
  public async createUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, password }: IRequest = request.body;

    console.log(name, email, password);

    const user = await container
      .resolve(CreateUserService)
      .execute({ email, name, password });

    return response.status(201).json(user);
  }
}
