import { Processor, WorkerHost, InjectQueue } from '@nestjs/bullmq';
import { Queue, Job } from 'bullmq';

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  constructor(@InjectQueue('music') private readonly musicQueue: Queue) {
    super();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    console.log('Processing Audio Job:', job.name, job.data);

    // 模拟任务处理
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000));

    // 向 music 队列添加任务
    await this.musicQueue.add('music1', job.data, {
      attempts: 3, // 最大重试次数
      backoff: { type: 'fixed', delay: 1000 }, // 固定退避延迟
    });
    console.log('Added task to music queue:', job.data);
  }
}
