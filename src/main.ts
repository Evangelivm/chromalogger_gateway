import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const protoPath = join(process.cwd(), 'src/proto/example.proto'); // Ruta absoluta

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'example', // Nombre del paquete en el archivo .proto
        protoPath: protoPath, // Ruta absoluta al archivo .proto
        url: 'localhost:5000', // Dirección y puerto del servidor gRPC
      },
    },
  );

  await app.listen();
  console.log('gRPC server is running on localhost:5000');
}
bootstrap();
