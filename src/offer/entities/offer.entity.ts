import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'offers' })
export class Offer extends Model<Offer> {

    @Column({ type: DataTypes.STRING(255) })
    name: string;

    @Column({ type: DataTypes.STRING(255), unique: true })
    slug: string;

    @Column({ type: DataTypes.TEXT })
    description: string;

    @Column({ type: DataTypes.TEXT })
    requirements: string;

    @Column({ type: DataTypes.STRING(255) })
    thumbnail: string;

    @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
    isDesktop: number;

    @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
    isAndroid: number;

    @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
    isIos: number;

    @Column({ type: DataTypes.STRING(256) })
    offerUrlTemplate: string;

    @Column({ type: DataTypes.STRING(255), allowNull: true })
    providerName: string;

    @Column({ type: DataTypes.STRING(255), allowNull: true })
    externalOfferId: string;
}