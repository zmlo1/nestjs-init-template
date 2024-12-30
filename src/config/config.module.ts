import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import databaseConfiguration from '../database/configuration';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [configuration, databaseConfiguration],
      expandVariables: true,
    }),
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
