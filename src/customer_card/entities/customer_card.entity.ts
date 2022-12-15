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
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
  })
  card_number: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  year: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: number;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;
  @Column({
    type: DataType.BOOLEAN,
  })
  is_main: boolean;
  @BelongsTo(() => Customer)
  customer: Customer;
}
