import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "delivery_methods",
  freezeTableName: true,
  timestamps: false,
})
export class DeliveryMethod extends Model<DeliveryMethod> {
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
