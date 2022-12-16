import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "customers", freezeTableName: true, timestamps: false })
export class Customer extends Model<Customer> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  first_name: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  last_name: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;
  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gender_id: number;
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lang_id: number;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  hashed_refresh_token: string;
}

// gender va lang tabllari hali yaratilmagan
