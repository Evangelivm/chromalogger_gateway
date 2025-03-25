import { Controller, Inject, Post, Body, OnModuleInit } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    @Inject('KAFKA_CLIENT') private readonly kafkaClient: ClientKafka,
    private readonly appService: AppService,
  ) {}

  async onModuleInit() {
    const topic = 'data_topic';
    await this.kafkaClient.connect();
    this.kafkaClient.subscribeToResponseOf(topic);
  }

  @Post('data')
  async sendDataRest(@Body() body: { data: string }) {
    // Forward the data through gRPC
    return this.sendData(body);
  }

  @GrpcMethod('AppController', 'SendData')
  sendData(data: { data: string }): { result: string } {
    // Send data to Kafka
    this.kafkaClient.emit('data_topic', { value: data.data });
    return { result: 'Data received and sent to Kafka' };
  }
}

// import { Controller, Post, Body } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Post('data')
//   async sendDataRest(@Body() body: { data: string }) {
//     // Simulamos la respuesta que vendría del microservicio gRPC
//     console.log('Received data:', body);
//     return {
//       success: true,
//       message: 'Data received successfully',
//       receivedData: body,
//     };
//   }
// }
