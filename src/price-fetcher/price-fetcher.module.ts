import { Module } from '@nestjs/common';
import { PriceFetcherService } from './price-fetcher.service';
import { PriceFetcherController } from './price-fetcher.controller';

@Module({
  controllers: [PriceFetcherController],
  providers: [PriceFetcherService],
})
export class PriceFetcherModule {}
