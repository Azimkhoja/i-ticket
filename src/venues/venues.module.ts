import { Module } from "@nestjs/common";
import { VenuesService } from "./venues.service";
import { VenuesController } from "./venues.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./entities/venue.entity";

@Module({
  imports: [SequelizeModule.forFeature([Venue])],
  controllers: [VenuesController],
  providers: [VenuesService],
  exports: [VenuesService],
})
export class VenuesModule {}
