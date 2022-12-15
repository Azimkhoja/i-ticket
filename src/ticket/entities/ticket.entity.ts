import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "src/events/entities/event.entity";

@Table({ tableName: "tickets", freezeTableName: true, timestamps: false })
export class Ticket extends Model<Ticket> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Event)
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @BelongsTo(() => Event)
  event: Event[];
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  price: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  service_fee: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  ticket_type: string;
}
