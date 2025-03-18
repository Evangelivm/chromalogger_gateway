import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('KAFKA_CLIENT') private readonly kafkaClient: ClientKafka,
    private readonly appService: AppService,
  ) {}

  @GrpcMethod('AppController', 'SendData')
  sendData(data: { data: string }): { result: string } {
    // Envía los datos a Kafka
    this.kafkaClient.emit('data_topic', { value: data.data });
    return { result: 'Data received and sent to Kafka' };
  }
}
