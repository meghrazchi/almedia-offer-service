import { Offer } from './entities/offer.entity';

export const offersProviders = [
    {
        provide: 'OFFERS_REPOSITORY',
        useValue: Offer,
    },
];