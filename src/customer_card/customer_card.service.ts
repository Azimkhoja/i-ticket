import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { CustomerCard } from "./entities/customer_card.entity";

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard)
    private customerCardRepository: typeof CustomerCard
  ) {}
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardRepository.create(createCustomerCardDto);
  }

  findAll() {
    return this.customerCardRepository.findAll();
  }

  findOne(id: number) {
    return this.customerCardRepository.findOne({ where: { id } });
  }

  update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardRepository.update(updateCustomerCardDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.customerCardRepository.destroy({ where: { id } });
  }
}
