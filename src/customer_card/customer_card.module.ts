import { Module } from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CustomerCardController } from "./customer_card.controller";
import { CustomerCard } from "./entities/customer_card.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forFeature([CustomerCard])],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
  exports: [CustomerCardService],
})
export class CustomerCardModule {}
