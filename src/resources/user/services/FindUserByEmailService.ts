import { inject, injectable } from "tsyringe";
import { IUserRepository, Users } from "../infra/database/entities/User";

interface IRequest {
  email: string;
}

@injectable()
export class FindUserByEmailService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({ email }: IRequest): Promise<Users | undefined> {
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}
