import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "admins", freezeTableName: true, timestamps: false })
export class Admin extends Model<Admin> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  login: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  hashed_password: string;
  @Column({
    type: DataType.STRING,
  })
  is_active: boolean;
  @Column({
    type: DataType.STRING,
  })
  is_creator: boolean;
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
