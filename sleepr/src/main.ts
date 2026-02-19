import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// We will create our a "common library - containing common modules like database access, auth, etc",
// that will be used be all of our microservices

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, async () => {
    console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
    console.log(`Server is running on http://localhost:${process.env.PORT ?? 3000}`);
  })
}
bootstrap();
