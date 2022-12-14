import { Column, DataType, Model } from "sequelize-typescript";

export class EventType extends Model<EventType> {
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
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;
}
