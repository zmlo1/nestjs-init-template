import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class AudioService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  onModuleInit() {
    this.addQueue();
  }

  async addQueue() {
    const job = await this.audioQueue.add('audio1', {
      foo: 'bar',
    });

    console.log(job.id);
  }
}
