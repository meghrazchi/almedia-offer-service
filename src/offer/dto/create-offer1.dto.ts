import { IsString, IsUrl, IsNumber, IsNotEmpty } from 'class-validator';

export class OfferProvider1DTO {
    @IsNotEmpty()
    @IsString()
    offer_id: string;

    @IsNotEmpty()
    @IsString()
    offer_name: string;

    @IsNotEmpty()
    @IsString()
    offer_desc: string;

    @IsNotEmpty()
    @IsString()
    call_to_action: string;

    @IsNotEmpty()
    @IsString()
    disclaimer: string;

    @IsNotEmpty()
    @IsUrl()
    offer_url: string;

    @IsNotEmpty()
    @IsUrl()
    offer_url_easy: string;

    @IsNotEmpty()
    @IsNumber()
    payout: number;

    @IsNotEmpty()
    @IsString()
    payout_type: string;

    @IsNotEmpty()
    @IsUrl()
    image_url: string;

    @IsNotEmpty()
    @IsString()
    platform: string;

    @IsNotEmpty()
    @IsString()
    device: string;

}