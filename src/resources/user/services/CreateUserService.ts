import { injectable, inject } from "tsyringe";
import { IUserRepository, Users } from "../infra/database/entities/User";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
export class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {
    //
  }

  public async execute({ email, name, password }: IRequest): Promise<Users> {
    const user = await this.usersRepository.create({
      email,
      name,
      password,
    });

    return user;
  }
}
