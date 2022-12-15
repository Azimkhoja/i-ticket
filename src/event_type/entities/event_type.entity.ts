import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "event_types", freezeTableName: true, timestamps: false })
export class EventType extends Model<EventType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;
}
