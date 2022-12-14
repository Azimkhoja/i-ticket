export class CreateCustomerCardDto {
  customer_id: number;
  name: string;
  phone: string;
  card_number: string;
  year: number;
  month: number;
  is_active: boolean;
  is_main: boolean;
}
