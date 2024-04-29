import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { offersProviders } from './offer.providers';

@Module({
  controllers: [OfferController],
  providers: [OfferService, ...offersProviders],
})
export class OfferModule { }
