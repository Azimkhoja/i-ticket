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
import { Customer } from "src/customers/entities/customer.entity";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";

@Table({
  tableName: "customer_address",
  freezeTableName: true,
  timestamps: false,
})
export class CustomerAddress extends Model<CustomerAddress> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty()
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
  @ApiProperty()
  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  country_id: number;
  @ApiProperty()
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;
  @ApiProperty()
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  street: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  house: string;
  @ApiProperty()
  @Column({
    type: DataType.SMALLINT,
  })
  flat: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  postal_index: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  @ApiProperty()
  info: string;
  @BelongsTo(() => Customer)
  customer: Customer;
  @BelongsTo(() => Country)
  country: Country;
  @BelongsTo(() => Region)
  region: Region;
  @BelongsTo(() => District)
  district: District;
}
