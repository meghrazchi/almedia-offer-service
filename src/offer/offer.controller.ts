import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferProvider1DTO } from './dto/create-offer1.dto';
import { OfferOsDTO, OfferProvider2DTO } from './dto/create-offer2.dto';
import { inputOffer1DTO } from './dto/input-offer1.dto';
import { inputOffer2DTO } from './dto/input-offer2.dto';
// import * as payload1 from './payloads/offer1.payload';
// import * as payload2 from './payloads/offer2.payload';


@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) { }


  @Post('/offer1')
  createOffer1(@Body() body: inputOffer1DTO) {
    // const offers = payload1?.response?.offers;
    const offers = body?.response?.offers;
    offers.forEach(async (createOfferDto: OfferProvider1DTO) => {
      await this.offerService.processOfferFromProvider1(createOfferDto);
    })

    return { result: 'success' }
  }

  @Post('offer2')
  createOffer2(@Body() body: inputOffer2DTO) {

    // const data: {} = payload2?.data;
    const data: {} = body?.data;
    Object.keys(data).forEach(async (key) => {
      const createOfferDto: OfferProvider2DTO = data[key].Offer;
      const offerOsDTO: OfferOsDTO = data[key].OS;
      await this.offerService.processOfferFromProvider2(createOfferDto, offerOsDTO);
    })
    return
  }

}
