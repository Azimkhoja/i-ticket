import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "venues", freezeTableName: true, timestamps: false })
export class Venue extends Model<Venue> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  site: string;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_type_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  schema: number;

  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;
}
