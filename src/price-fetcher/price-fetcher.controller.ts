import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PriceFetcherService } from './price-fetcher.service';
import { CreatePriceFetcherDto } from './dto/create-price-fetcher.dto';
import { UpdatePriceFetcherDto } from './dto/update-price-fetcher.dto';

@Controller('price-fetcher')
export class PriceFetcherController {
  constructor(private readonly priceFetcherService: PriceFetcherService) {}

  @Post()
  create(@Body() createPriceFetcherDto: CreatePriceFetcherDto) {
    return this.priceFetcherService.create(createPriceFetcherDto);
  }

  @Get()
  findAll() {
    return this.priceFetcherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceFetcherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePriceFetcherDto: UpdatePriceFetcherDto) {
    return this.priceFetcherService.update(+id, updatePriceFetcherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceFetcherService.remove(+id);
  }
}
