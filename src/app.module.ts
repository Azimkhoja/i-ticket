import { Module } from "@nestjs/common";
import { EventsModule } from "./events/events.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Event } from "./events/entities/event.entity";
import { VenuesModule } from "./venues/venues.module";
import { Venue } from "./venues/entities/venue.entity";
import { CustomersModule } from "./customers/customers.module";
import { Customer } from "./customers/entities/customer.entity";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/entities/admin.entity";
import { TicketModule } from "./ticket/ticket.module";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/entities/seat.entity";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { BookingModule } from "./booking/booking.module";
import { CartModule } from "./cart/cart.module";
import { Cart } from "./cart/entities/cart.entity";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { CustomerAddress } from "./customer_address/entities/customer_address.entity";
import { EventType } from "./event_type/entities/event_type.entity";
import { VenuePhoto } from "./venue_photo/entities/venue_photo.entity";
import { Ticket } from "./ticket/entities/ticket.entity";
import { SeatType } from "./seat_type/entities/seat_type.entity";
import { CustomerCard } from "./customer_card/entities/customer_card.entity";
import { Booking } from "./booking/entities/booking.entity";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { CountryModule } from "./country/country.module";
import { Country } from "./country/entities/country.entity";
import { DeliveryMethodModule } from "./delivery_method/delivery_method.module";
import { DeliveryMethod } from "./delivery_method/entities/delivery_method.entity";
import { DiscountCouponModule } from "./discount_coupon/discount_coupon.module";
import { DiscountCoupon } from "./discount_coupon/entities/discount_coupon.entity";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/entities/region.entity";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/entities/district.entity";
import { PaymentMethodModule } from "./payment_method/payment_method.module";
import { PaymentMethod } from "./payment_method/entities/payment_method.entity";
import { StatusModule } from "./status/status.module";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/entities/human_category.entity";
import { VenueType } from "./venue_type/entities/venue_type.entity";
import { Status } from "./status/entities/status.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Customer,
        Event,
        Venue,
        Seat,
        Cart,
        Ticket,
        Booking,
        CustomerAddress,
        EventType,
        SeatType,
        VenueType,
        CustomerCard,
        VenuePhoto,
        Country,
        DeliveryMethod,
        DiscountCoupon,
        Region,
        District,
        PaymentMethod,
        HumanCategory,
        Status,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    CustomersModule,
    VenuesModule,
    EventsModule,
    SeatModule,
    TicketModule,
    CartModule,
    BookingModule,
    CustomerAddressModule,
    CustomerCardModule,
    SeatTypeModule,
    EventTypeModule,
    VenuePhotoModule,
    VenueTypeModule,
    CountryModule,
    DeliveryMethodModule,
    DiscountCouponModule,
    RegionModule,
    DistrictModule,
    PaymentMethodModule,
    StatusModule,
    HumanCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
