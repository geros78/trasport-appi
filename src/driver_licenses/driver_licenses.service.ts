import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverLicenseDto } from './dto/create-driver_license.dto';
import { UpdateDriverLicenseDto } from './dto/update-driver_license.dto';
import { DriverLicense } from './entities/driver_license.entity';

@Injectable()
export class DriverLicensesService {

  constructor(
    @InjectRepository(DriverLicense)
    private driver_licensesRepository: Repository<DriverLicense>,
  ){}

  create(createDriverLicenseDto: CreateDriverLicenseDto) {
    const result = this.driver_licensesRepository.save(createDriverLicenseDto);
    return result;
  }

  findAll() {
    return this.driver_licensesRepository.find();
  }

  findOne(id: number) {
    return this.driver_licensesRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateDriverLicenseDto) {
    const result = await this.driver_licensesRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.driver_licensesRepository.delete(id);
  }
}
