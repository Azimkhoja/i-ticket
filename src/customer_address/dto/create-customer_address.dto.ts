export class CreateCustomerAddressDto {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  postal_index: string;
  info: string;
}
