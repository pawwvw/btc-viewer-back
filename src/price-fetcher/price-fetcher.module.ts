import { Module } from '@nestjs/common';
import { PriceFetcherService } from './price-fetcher.service';
import { PriceFetcherController } from './price-fetcher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceFetcher } from './entities/price-fetcher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceFetcher])],
  controllers: [PriceFetcherController],
  providers: [PriceFetcherService],
})
export class PriceFetcherModule {}
