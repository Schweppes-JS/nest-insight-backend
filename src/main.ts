import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ["http://localhost:4200", "https://insight-backoffice.vercel.app"],
  });
  await app.listen(3000);
}
bootstrap();
