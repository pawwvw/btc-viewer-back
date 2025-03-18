import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceFetcher } from './entities/price-fetcher.entity';
import { Between, Repository } from 'typeorm';
import axios from 'axios';
import { Cron, CronExpression } from '@nestjs/schedule';


export interface CoinDeskResponse {
  data: {
    Data: {
      'BTC-USD': {
        PRICE: number;
      };
    };
  }
}

@Injectable()
export class PriceFetcherService {
  constructor (
    @InjectRepository(PriceFetcher)
    private readonly priceFetcherRepository: Repository<PriceFetcher> 
  ){}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async savePrice(): Promise<PriceFetcher> {
    const price = await this.fetchCurrentPrice()
    const newPrice = this.priceFetcherRepository.create({price})
    return await this.priceFetcherRepository.save(newPrice)
  }

  async getPrices(startDate?: string, endDate?: string): Promise<PriceFetcher[]>{
    if (startDate && endDate) {
      return await this.priceFetcherRepository.find({
        where: {
          timestamp: Between(new Date(startDate), new Date(endDate)),
        },
      });
    }
    return await this.priceFetcherRepository.find()
  } 

  async fetchCurrentPrice(): Promise<number>{
    try {
      const response: CoinDeskResponse = await axios.get('https://data-api.coindesk.com/spot/v1/latest/tick?market=coinbase&instruments=BTC-USD');
      const price: number = response.data.Data['BTC-USD'].PRICE;
      console.log(`Fetched current price: ${price}`);
      return price;
    } catch {
      throw new Error('Failed to fetch current price');
    }
  }
}
