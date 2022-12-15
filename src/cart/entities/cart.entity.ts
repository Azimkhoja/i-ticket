import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "carts", freezeTableName: true, timestamps: false })
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  ticket_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;
  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
}
