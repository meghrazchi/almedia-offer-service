import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database/database.provider';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [OfferModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule { }
