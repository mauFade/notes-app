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
    private userRepository: IUserRepository
  ) {}

  public async execute({ email, name, password }: IRequest): Promise<Users> {
    const user = await this.userRepository.create({ email, name, password });

    return user;
  }
}
