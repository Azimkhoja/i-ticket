import { ApiProperty } from "@nestjs/swagger";
import { uniq } from "lodash";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venues/entities/venue.entity";

@Table({ tableName: "seats", freezeTableName: true, timestamps: false })
export class Seat extends Model<Seat> {
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
  })
  sector: string;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  number: number;
  @ForeignKey(() => Venue)
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  venue_id;
  @BelongsTo(() => Venue)
  venue: Venue;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  seat_type_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  location_id_schema: string;
}
