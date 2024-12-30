import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BollModule } from './modules/bull/bull.module';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Module({
  imports: [ConfigModule, AuthModule, UserModule, BollModule],
  controllers: [AppController],
  providers: [
    AppService,
    // { provide: APP_GUARD, useClass: JwtAuthGuard }
  ],
})
export class AppModule {}
