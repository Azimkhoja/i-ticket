import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "customers", freezeTableName: true, timestamps: false })
export class Customer extends Model<Customer> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  first_name: string;
  @Column({
    type: DataType.STRING,
  })
  last_name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;
  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lang_id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  hashed_refresh_token: string;
}
