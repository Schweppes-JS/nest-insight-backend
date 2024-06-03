import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: [process.env.ENABLED_CORS] });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
