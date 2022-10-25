import { IUser } from "../../../dtos/IUser";

export class Users {
  id: string;
  name: string;
  email: string;

  is_deleted: boolean | null;
  created_at: Date | null;
  updated_at: Date | null;
  deleted_at: Date | null;
}

export interface IUserRepository {
  create(data: IUser): Promise<Users>;
  findByEmail(email: string): Promise<Users | undefined>;
  findById(id: string): Promise<Users | undefined>;
}
