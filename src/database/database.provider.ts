import { Sequelize } from 'sequelize-typescript';
import { Offer } from '../offer/entities/offer.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        // TODO: should read from the config file

        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            });
            sequelize.addModels([Offer]);
            await sequelize.sync();
            return sequelize;
        },
    },
];