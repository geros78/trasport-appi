import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLicenseTypeDto } from './dto/create-license_type.dto';
import { UpdateLicenseTypeDto } from './dto/update-license_type.dto';
import { LicenseType } from './entities/license_type.entity';

@Injectable()
export class LicenseTypesService {

  constructor(
    @InjectRepository(LicenseType)
    private license_typeRepository: Repository<LicenseType>,
  ){}

  create(createLicenseTypeDto: CreateLicenseTypeDto) {
    const result = this. license_typeRepository.save(createLicenseTypeDto);
    return result;
  }

  findAll() {
    return `This action returns all licenseTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licenseType`;
  }

  update(id: number, updateLicenseTypeDto: UpdateLicenseTypeDto) {
    return `This action updates a #${id} licenseType`;
  }

  remove(id: number) {
    return `This action removes a #${id} licenseType`;
  }
}
