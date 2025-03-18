import { Injectable } from '@nestjs/common';
import { CreatePriceFetcherDto } from './dto/create-price-fetcher.dto';
import { UpdatePriceFetcherDto } from './dto/update-price-fetcher.dto';

@Injectable()
export class PriceFetcherService {
  create(createPriceFetcherDto: CreatePriceFetcherDto) {
    return 'This action adds a new priceFetcher';
  }

  findAll() {
    return `This action returns all priceFetcher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceFetcher`;
  }

  update(id: number, updatePriceFetcherDto: UpdatePriceFetcherDto) {
    return `This action updates a #${id} priceFetcher`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceFetcher`;
  }
}
