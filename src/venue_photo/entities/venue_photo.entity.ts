import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venues/entities/venue.entity";

@Table({ tableName: "venue_photos", freezeTableName: true, timestamps: false })
export class VenuePhoto extends Model<VenuePhoto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Venue)
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  photo_url: string;
  @BelongsTo(() => Venue)
  venue: Venue[];
}
