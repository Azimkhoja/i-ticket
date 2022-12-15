import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Bookingni o'chirish" })
  @ApiResponse({ status: 200, type: Cart })
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha cartlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [Cart] })
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "bitta cart haqida malumot olish" })
  @ApiResponse({ status: 200, type: Cart })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "Cart ga ozgartirish kiritish" })
  @ApiResponse({ status: 200, type: Cart })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: "Cartni o'chirish" })
  @ApiResponse({ status: 200, type: Cart })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
