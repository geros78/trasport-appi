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
    return `This action returns all driverLicenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverLicense`;
  }

  update(id: number, updateDriverLicenseDto: UpdateDriverLicenseDto) {
    return `This action updates a #${id} driverLicense`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverLicense`;
  }
}
