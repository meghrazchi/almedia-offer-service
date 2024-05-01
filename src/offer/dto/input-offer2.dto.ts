import { OfferOsDTO, OfferProvider2DTO } from './create-offer2.dto';

export class inputOffer2DTO {

    status: string;
    data: Record<string, { Offer: OfferProvider2DTO, OS: OfferOsDTO }>;
}