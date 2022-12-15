import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Region } from "src/region/entities/region.entity";

@Table({
  tableName: "districts",
  freezeTableName: true,
  timestamps: false,
})
export class District extends Model<District> {
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
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @BelongsTo(() => Region)
  country: Region;
}
