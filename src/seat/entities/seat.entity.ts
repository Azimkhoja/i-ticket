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
  @Column({
    type: DataType.STRING,
  })
  sector: string;
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;
  @Column({
    type: DataType.INTEGER,
  })
  number: number;
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id;
  @BelongsTo(() => Venue)
  venue: Venue;
  @Column({
    type: DataType.INTEGER,
  })
  seat_type_id: number;
  @Column({
    type: DataType.STRING,
  })
  location_id_schema: string;
}
