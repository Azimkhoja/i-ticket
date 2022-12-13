import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function run() {
  const PORT = process.env.PORT;
  try {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle(`4-IMTIHOM NestJS da iTicket.uz`)
      .setDescription("REST API")
      .setVersion("1.0.0")
      .addTag("NodeJS, NestJS, Postgres, sequelize")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    await app.listen(PORT, () => {
      console.log(`Server running on port  http://localhost:${PORT}/api/docs`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
run();
