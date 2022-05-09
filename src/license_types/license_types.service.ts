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
    return this.license_typeRepository.find();
  }

  findOne(id: number) {
    return this.license_typeRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateLicenseTypeDto) {
    const result = await this.license_typeRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.license_typeRepository.delete(id);
  }
}
