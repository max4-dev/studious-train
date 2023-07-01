import { ModelCtor } from "sequelize";
import { Model } from "sequelize-typescript";
import { Column, Table } from "sequelize-typescript";

@Table
export class BoilerParts extends Model<BoilerParts> {
  @Column
  boiler_manufacturer: string;

  @Column
  parts_manufacturer: string;

  @Column({defaultValue: 0})
  price: number;

  @Column
  vendor_code: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string;

  @Column({defaultValue: 0})
  in_stock: number;

  @Column({defaultValue: false})
  bestseller: boolean;

  @Column({defaultValue: false})
  new: boolean;

  @Column
  popularity: number;

  @Column
  compatibility: string;
}

export type BoilerPartsModel = ModelCtor<BoilerParts>;