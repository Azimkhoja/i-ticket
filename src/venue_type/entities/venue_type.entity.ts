import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "venue_type", freezeTableName: true, timestamps: false })
export class VenueType extends Model<VenueType> {
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
}
