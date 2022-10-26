import { FindUserByEmailService } from "../../../services/FindUserByEmailService";
import { Request, Response } from "express";
import { container } from "tsyringe";

interface IRequest {
  email: string;
}

export class FindUserByEmailController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email }: IRequest = Object(request.params);

    try {
      const user = await container
        .resolve(FindUserByEmailService)
        .execute({ email });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
