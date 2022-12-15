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
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @BelongsTo(() => Event)
  event: Event[];
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  price: number;
  @Column({
    type: DataType.STRING,
  })
  service_fee: number;
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  ticket_type: number;
}
