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
      models: [Event, Venue, Customer, Admin, Seat],
      autoLoadModels: true,
      logging: false,
    }),
    EventsModule,
    VenuesModule,
    CustomersModule,
    AdminModule,
    TicketModule,
    SeatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
