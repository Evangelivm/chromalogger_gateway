import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  processData(data: string) {
    console.log('Processing data:', data);
  }
}
