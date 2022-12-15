import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "discount_coupons",
  freezeTableName: true,
  timestamps: false,
})
export class DiscountCoupon extends Model<DiscountCoupon> {
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
