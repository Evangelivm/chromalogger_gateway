import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { kafkaConfig } from '../kafka/kafka.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_CONSUMER',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: kafkaConfig.client.brokers,
          },
          consumer: {
            groupId: kafkaConfig.consumer.groupId,
          },
        },
      },
    ]),
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
