import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer) private customerRepository: typeof Customer
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.create(createCustomerDto);
  }

  async findAll() {
    return this.customerRepository.findAll();
  }

  async findOne(id: number) {
    return this.customerRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(updateCustomerDto, { where: { id } });
  }

  async remove(id: number) {
    return this.customerRepository.destroy({ where: { id } });
  }
}
