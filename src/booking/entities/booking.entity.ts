import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";

@Table({ tableName: "bookings", freezeTableName: true, timestamps: false })
export class Booking extends Model<Booking> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  cart_id: number;
  @Column({
    type: DataType.DATE,
    defaultValue: Date.now(),
  })
  createdAt: Date;
  @Column({
    type: DataType.DATE,
  })
  finished: Date;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
}

// bu tablda 5 ta #foreignkey joylanishi kerak
