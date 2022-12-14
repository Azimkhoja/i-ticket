import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
} from "sequelize-typescript";
import { Venue } from "src/venues/entities/venue.entity";

export class VenuePhoto extends Model<VenuePhoto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.STRING,
  })
  venue_id: number;
  @Column({
    type: DataType.STRING,
  })
  photo_url: string;
  @BelongsTo(() => Venue)
  venue: Venue[];
}
