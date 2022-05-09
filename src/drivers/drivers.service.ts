import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {

  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ){}

  create(createDriverDto: CreateDriverDto) {
    const result = this.driverRepository.save(createDriverDto);
    return result;
  }

  findAll() {
    return this.driverRepository.find();
  }

  findOne(id: number) {
    return this.driverRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateDriverDto) {
    const result = await this.driverRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.driverRepository.delete(id);
  }
}
