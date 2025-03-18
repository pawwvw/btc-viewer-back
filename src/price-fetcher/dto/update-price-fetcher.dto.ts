import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceFetcherDto } from './create-price-fetcher.dto';

export class UpdatePriceFetcherDto extends PartialType(CreatePriceFetcherDto) {}
