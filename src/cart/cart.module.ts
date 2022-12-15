import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cart } from "./entities/cart.entity";
import { CustomerAddressService } from "src/customer_address/customer_address.service";

@Module({
  imports: [SequelizeModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
