import { Module } from '@nestjs/common';
import { PriceFetcherModule } from './price-fetcher/price-fetcher.module';

@Module({
  imports: [PriceFetcherModule],
})
export class AppModule {}
