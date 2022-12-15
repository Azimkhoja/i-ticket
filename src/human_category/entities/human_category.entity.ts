import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "human_category",
  freezeTableName: true,
  timestamps: false,
})
export class HumanCategory extends Model<HumanCategory> {
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
  })
  name: string;
  @ApiProperty()
  @Column({
    type: DataType.SMALLINT,
  })
  start_age: number;
  @ApiProperty()
  @Column({
    type: DataType.SMALLINT,
  })
  finish_age: number;
  @ApiProperty()
  @Column({
    type: DataType.SMALLINT,
  })
  gender: number;
}
