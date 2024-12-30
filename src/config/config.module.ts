import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import databaseConfiguration from '../database/configuration';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      expandVariables: true,
      load: [configuration, databaseConfiguration],
      envFilePath: ['.env', `.env.${process.env.NODE_ENV}`, `.env.${process.env.NODE_ENV}.local`],
    }),
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
