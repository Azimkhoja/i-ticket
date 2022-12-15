import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateDiscountCouponDto } from "./dto/create-discount_coupon.dto";
import { UpdateDiscountCouponDto } from "./dto/update-discount_coupon.dto";
import { DiscountCoupon } from "./entities/discount_coupon.entity";

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(DiscountCoupon)
    private discountCouponRepository: typeof DiscountCoupon
  ) {}
  async create(createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponRepository.create(createDiscountCouponDto);
  }

  async findAll() {
    return this.discountCouponRepository.findAll();
  }

  async findOne(id: number) {
    return this.discountCouponRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountCouponRepository.update(updateDiscountCouponDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.discountCouponRepository.destroy({ where: { id } });
  }
}
