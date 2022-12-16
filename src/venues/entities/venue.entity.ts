import { ApiProperty } from "@nestjs/swagger";
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";
import { VenueType } from "src/venue_type/entities/venue_type.entity";

@Table({ tableName: "venues", freezeTableName: true, timestamps: false })
export class Venue extends Model<Venue> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
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
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  site: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone: string;

  @ApiProperty()
  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_type_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  schema: number;

  @ApiProperty()
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @ApiProperty()
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @BelongsTo(() => VenueType)
  venueType: VenueType;
  @BelongsTo(() => Region)
  region: Region;
  @BelongsTo(() => District)
  district: District;
}
