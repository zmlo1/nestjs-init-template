import { OnQueueEvent, Processor, QueueEventsHost, QueueEventsListener, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('music')
export class MusicConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(`Processing Music Job: ${job.name}, Attempt: ${job.attemptsMade}`);

    // 模拟任务失败逻辑
    if (Math.random() > 0.1) {
      console.error(`Task ${job.id} failed, throwing error...`);
      throw new Error('Simulated processing failure');
    }

    console.log('Music Job Processed Successfully:', job.data);
    return job.data; // 成功时返回数据
  }
}

@QueueEventsListener('music')
export class MusicEventsListener extends QueueEventsHost {
  @OnQueueEvent('completed')
  onCompleted({ jobId, returnvalue }) {
    console.log(`Task ${jobId} completed successfully. Result:`, returnvalue);
  }

  @OnQueueEvent('failed')
  onFailed({ jobId, failedReason }) {
    console.error(`Task ${jobId} failed. Reason:`, failedReason);
  }
}
