import { OfferProvider1DTO } from './create-offer1.dto';

export class QueryDTO {
    pubid?: string;
    appid?: number;
    country?: string;
    platform?: string;
}

export class ResponseDTO {
    currency_name?: string;
    offers_count?: number;
    offers: OfferProvider1DTO[];
}

export class inputOffer1DTO {
    query?: QueryDTO;
    response: ResponseDTO;
}