import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure gRPC microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'example',
      protoPath: join(process.cwd(), 'src/proto/example.proto'),
      url: 'localhost:5000',
    },
  });

  // Start microservices and HTTP server
  await app.startAllMicroservices();
  await app.listen(3000);

  console.log('REST server is running on port 3000');
  console.log('gRPC server is running on localhost:5000');
}
bootstrap();
