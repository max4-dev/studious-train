import { ModelCtor } from "sequelize";
import { Model } from "sequelize-typescript";
import { Column, Table } from "sequelize-typescript";

@Table
export class ShoppingCart extends Model<ShoppingCart> {
  @Column
  userId: number;

  @Column
  partId: number;

  @Column
  boiler_manufacturer: string;

  @Column
  parts_manufacturer: string;

  @Column({defaultValue: 0})
  price: number;

  @Column
  name: string;

  @Column
  image: string;

  @Column({defaultValue: 0})
  in_stock: number;

  @Column({defaultValue: 0})
  count: number;

  @Column({defaultValue: 0})
  total_price: number;
}

export type ShoppingCartModel = ModelCtor<ShoppingCart>;