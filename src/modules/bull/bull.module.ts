import { Module } from '@nestjs/common';
import { BullModule as NestBullModule } from '@nestjs/bullmq';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@/config/config.module';
import { AudioService } from './audio.service';
import { AudioConsumer } from './audio.consumer';
import { MusicConsumer, MusicEventsListener } from './music.consumer';

@Module({
  imports: [
    NestBullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        connection: {
          host: configService.get('queue.host'),
          port: configService.get('queue.port'),
        },
      }),
    }),
    NestBullModule.registerQueue({ name: 'audio' }, { name: 'music' }),
  ],
  controllers: [],
  providers: [AudioService, AudioConsumer, MusicConsumer, MusicEventsListener],
  exports: [],
})
export class BollModule {}
