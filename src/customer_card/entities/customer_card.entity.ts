import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customers/entities/customer.entity";

@Table({ tableName: "customer_card", freezeTableName: true, timestamps: false })
export class CustomerCard extends Model<CustomerCard> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Customer)
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  card_number: string;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  year: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;
  @ApiProperty()
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;
  @ApiProperty()
  @Column({
    type: DataType.BOOLEAN,
  })
  is_main: boolean;
  @BelongsTo(() => Customer)
  customer: Customer;
}
