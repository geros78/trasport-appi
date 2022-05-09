import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ){}

  create(createCityDto: CreateCityDto) {
    const result = this.cityRepository.save(createCityDto);
    return result;
  }

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return this.cityRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateCityDto) {
    const result = await this.cityRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.cityRepository.delete(id);
  }
}
