import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "events", freezeTableName: true, timestamps: false })
export class Event extends Model<Event> {
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  photo: string;
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;
  @Column({
    type: DataType.DATE,
  })
  start_time: Date;
  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;
  @Column({
    type: DataType.DATE,
  })
  finish_time: Date;
  @Column({
    type: DataType.STRING,
  })
  info: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_type_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  human_category_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
