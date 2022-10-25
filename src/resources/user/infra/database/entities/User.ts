import { IUser } from "../../../dtos/IUser";

export class Users {
  id: string;
  name: string;
  email: string;

  is_deleted?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface IUserRepository {
  create(data: IUser): Promise<Users>;
  save(user: Users): Promise<Users>;
  findByEmail(email: string): Promise<Users | undefined>;
  findById(id: string): Promise<Users | undefined>;
}
