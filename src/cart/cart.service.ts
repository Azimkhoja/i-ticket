import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}
  async create(createCartDto: CreateCartDto) {
    return this.cartRepository.create(createCartDto);
  }

  async findAll() {
    return this.cartRepository.findAll();
  }

  async findOne(id: number) {
    return this.cartRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepository.update(updateCartDto, { where: { id } });
  }

  async remove(id: number) {
    return this.cartRepository.destroy({ where: { id } });
  }
}
