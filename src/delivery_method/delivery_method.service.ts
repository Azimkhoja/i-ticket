import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import { DeliveryMethod } from "./entities/delivery_method.entity";

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod)
    private deliveryMethodRepository: typeof DeliveryMethod
  ) {}
  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodRepository.create(createDeliveryMethodDto);
  }

  async findAll() {
    return this.deliveryMethodRepository.findAll();
  }

  async findOne(id: number) {
    return this.deliveryMethodRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodRepository.update(updateDeliveryMethodDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.deliveryMethodRepository.destroy({ where: { id } });
  }
}
