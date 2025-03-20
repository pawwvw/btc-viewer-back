import { Controller, Get, Query } from '@nestjs/common';
import { PriceFetcherService } from './price-fetcher.service';
import { PriceFetcher } from './entities/price-fetcher.entity';

@Controller('price-fetcher')
export class PriceFetcherController {
  constructor(private readonly priceFetcherService: PriceFetcherService) {}

  @Get()
  async getPrices(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ): Promise<PriceFetcher[]> {
    return this.priceFetcherService.getPrices(startDate, endDate);
  }
}
