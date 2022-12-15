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
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  photo: string;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  start_time: Date;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  finish_time: Date;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  info: string;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_type_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  human_category_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lang: string;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
