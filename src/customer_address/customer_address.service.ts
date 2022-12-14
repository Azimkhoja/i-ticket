import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { CustomerAddress } from "./entities/customer_address.entity";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress)
    private customerAddressRepository: typeof CustomerAddress
  ) {}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressRepository.create(createCustomerAddressDto);
  }

  findAll() {
    return this, this.customerAddressRepository.findAll();
  }

  findOne(id: number) {
    return this.customerAddressRepository.findOne({ where: { id } });
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressRepository.update(updateCustomerAddressDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.customerAddressRepository.destroy({ where: { id } });
  }
}
