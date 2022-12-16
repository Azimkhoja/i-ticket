import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Cart } from "src/cart/entities/cart.entity";
import { DeliveryMethod } from "src/delivery_method/entities/delivery_method.entity";
import { DiscountCoupon } from "src/discount_coupon/entities/discount_coupon.entity";
import { PaymentMethod } from "src/payment_method/entities/payment_method.entity";
import { Status } from "src/status/entities/status.entity";

@Table({ tableName: "bookings", freezeTableName: true, timestamps: false })
export class Booking extends Model<Booking> {
  @ApiProperty({})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({})
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  cart_id: number;
  @ApiProperty({})
  @Column({
    type: DataType.DATE,
    defaultValue: Date.now(),
  })
  createdAt: Date;
  @ApiProperty({})
  @Column({
    type: DataType.DATE,
  })
  finished: Date;
  @ApiProperty({})
  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;
  @ApiProperty({})
  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;

  @ApiProperty({})
  @ForeignKey(() => DiscountCoupon)
  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;
  @ApiProperty({})
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
  })
  @ApiProperty({})
  status_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;
  @BelongsTo(() => PaymentMethod)
  paymentMethod: PaymentMethod;
  @BelongsTo(() => DeliveryMethod)
  deliveryMethod: DeliveryMethod;
  @BelongsTo(() => DiscountCoupon)
  discountCoupon: DiscountCoupon;
  @BelongsTo(() => Status)
  status: Status;
}

// bu tablda 5 ta #foreignkey joylanishi kerak
