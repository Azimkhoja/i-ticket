import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Country } from "src/country/entities/country.entity";

@Table({
  tableName: "regions",
  freezeTableName: true,
  timestamps: false,
})
export class Region extends Model<Region> {
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
  @ForeignKey(() => Country)
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @BelongsTo(() => Country)
  country: Country;
}
