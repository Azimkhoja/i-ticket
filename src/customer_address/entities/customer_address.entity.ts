import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "customer_address", freezeTableName: true, timestamps: false })
export class CustomerAddress extends Model<CustomerAddress> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  country_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  street: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  house: string;
  @Column({
    type: DataType.SMALLINT,
  })
  flat: number;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.STRING,
  })
  postal_index: string;
  @Column({
    type: DataType.STRING,
  })
  info: string;
}
