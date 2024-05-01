import { Inject, Injectable } from '@nestjs/common';
import { OfferProvider1DTO } from './dto/create-offer1.dto';
import { OfferOsDTO, OfferProvider2DTO } from './dto/create-offer2.dto';
import { Offer } from './entities/offer.entity';
import { validate } from 'class-validator';

@Injectable()
export class OfferService {

  constructor(@Inject('OFFERS_REPOSITORY')
  private offersRepository: typeof Offer) { }

  async processOfferFromProvider1(payload: OfferProvider1DTO): Promise<void> {
    const validationErrors = await validate(payload);
    if (validationErrors.length > 0) {
      console.warn('Invalid offer from Provider 1:', validationErrors);
      return; // Skip invalid offer
    }

    try {
      const offer = await this.offersRepository.create({
        name: payload.offer_name,
        slug: payload.offer_id,
        description: payload.offer_desc,
        requirements: payload.call_to_action,
        thumbnail: payload.image_url,
        isDesktop: payload.platform == 'desktop' ? 1 : 0,
        isAndroid: payload.device != 'iphone_ipad' ? 1 : 0,
        isIos: payload.device == 'iphone_ipad' ? 1 : 0,
        offerUrlTemplate: payload.offer_url,
        providerName: 'offer1', // Set provider name
        externalOfferId: payload.offer_id,
      });
    } catch (error) {
      console.error(error);
    }

    return Promise.resolve();
  }

  async processOfferFromProvider2(payload: OfferProvider2DTO, offerOsDTO: OfferOsDTO): Promise<void> {
    const validationErrors = await validate(payload);
    if (validationErrors.length > 0) {
      console.warn('Invalid offer from Provider 2:', validationErrors);
      return; // Skip invalid offer
    }

    try {
      // Transform and map to Offer entity
      const offer = this.offersRepository.create({
        name: payload.name,
        slug: payload.campaign_id,
        description: payload.description,
        requirements: payload.instructions,
        thumbnail: payload.icon,
        isDesktop: offerOsDTO?.web ? 1 : 0,
        isAndroid: offerOsDTO?.android ? 1 : 0,
        isIos: offerOsDTO?.ios ? 1 : 0,
        offerUrlTemplate: payload.tracking_url,
        providerName: 'offer2', // Set provider name
        externalOfferId: payload.campaign_id,
      });
    } catch (error) {
      console.error(error);
    }

    return Promise.resolve();
  }

}
