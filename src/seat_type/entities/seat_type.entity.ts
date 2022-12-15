import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "seat_types", freezeTableName: true, timestamps: false })
export class SeatType extends Model<SeatType> {
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
}
