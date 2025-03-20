import { Module } from '@nestjs/common';
import { PriceFetcherModule } from './price-fetcher/price-fetcher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'config/database.config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig),ScheduleModule.forRoot() , PriceFetcherModule],
})
export class AppModule {}
