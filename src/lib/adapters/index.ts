import { container } from "tsyringe";
import { IUserRepository } from "../../resources/user/infra/database/entities/User";
import UserRepository from "../../resources/user/infra/database/repositories/User";

container.registerSingleton<IUserRepository>("UsersRepository", UserRepository);
