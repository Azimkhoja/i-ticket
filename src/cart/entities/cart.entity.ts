import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customers/entities/customer.entity";
import { Status } from "src/status/entities/status.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

@Table({ tableName: "carts", freezeTableName: true, timestamps: false })
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty()
  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticket_id: number;
  @ApiProperty()
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;
  @ApiProperty()
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;
  @BelongsTo(() => Customer)
  customer: Customer;
  @BelongsTo(() => Status)
  status: Status;
}
