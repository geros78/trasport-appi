import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {

  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ){}

  create(createCountryDto: CreateCountryDto) {
    const result = this.countryRepository.save(createCountryDto);
    return result;
  }

  findAll() {
    return this.countryRepository.find();
  }

  findOne(id: number) {
    return this.countryRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateCountryDto) {
    const result = await this.countryRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.countryRepository.delete(id);
  }
}
