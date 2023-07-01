import { ModelCtor } from "sequelize";
import { Model } from "sequelize-typescript";
import { Column, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}

export type UserModel = ModelCtor<User>;