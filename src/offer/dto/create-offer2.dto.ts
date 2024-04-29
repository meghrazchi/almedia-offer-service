import { IsBoolean, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { IsUrl } from "sequelize-typescript";
import { Type } from 'class-transformer';

export class OfferOsDTO {
    @IsBoolean()
    android: boolean;

    @IsBoolean()
    ios: boolean;

    @IsBoolean()
    web: boolean;
}

export class OfferProvider2DTO {
    @IsNotEmpty()
    @IsString()
    campaign_id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    instructions: string;

    @IsNotEmpty()
    @IsString()
    tracking_url: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsNumber()
    payout_usd: number;

    @IsNotEmpty()
    @IsString()
    icon: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => OfferOsDTO)
    OS: OfferOsDTO;


}