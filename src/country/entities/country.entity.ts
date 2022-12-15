import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "countries", freezeTableName: true, timestamps: false })
export class Country extends Model<Country> {
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
    unique: true,
  })
  name: string;
}
