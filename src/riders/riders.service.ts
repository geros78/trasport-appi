import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { Rider } from './entities/rider.entity';

@Injectable()
export class RidersService {
  
  constructor(
    @InjectRepository(Rider)
    private riderRepository: Repository<Rider>,
  ){}
  
  create(createRiderDto: CreateRiderDto) {
    const result = this.riderRepository.save(createRiderDto);
    return result;
  }

  findAll() {
    return this.riderRepository.find();
  }

  findOne(id: number) {
    return this.riderRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateRiderDto) {
    const result = await this.riderRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.riderRepository.delete(id);
  }
}
