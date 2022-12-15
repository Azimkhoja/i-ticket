import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PaymentMethod } from "./entities/payment_method.entity";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod)
    private paymentMethodRepository: typeof PaymentMethod
  ) {}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodRepository.create(createPaymentMethodDto);
  }

  async findAll() {
    return this.paymentMethodRepository.findAll();
  }

  async findOne(id: number) {
    return this.paymentMethodRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodRepository.update(updatePaymentMethodDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.paymentMethodRepository.destroy({ where: { id } });
  }
}
