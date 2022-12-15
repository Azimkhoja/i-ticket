import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "customer_address", freezeTableName: true, timestamps: false })
export class CustomerAddress extends Model<CustomerAddress> {
  
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;
  @ApiProperty()
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
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  country_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;
  @ApiProperty()
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
}
