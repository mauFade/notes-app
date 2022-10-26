import { prisma } from "../../../../../configs/prisma";
import { IUser } from "../../../dtos/IUser";
import { IUserRepository, Users } from "../entities/User";

class UserRepository implements IUserRepository {
  public async create({ email, name, password }: IUser): Promise<Users> {
    const user = (await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })) as Users;

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = (await prisma.user.findFirstOrThrow({
      where: {
        email,
      },
    })) as Users | undefined;

    return user;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const user = (await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    })) as Users | undefined;

    return user;
  }
}

export default UserRepository;
