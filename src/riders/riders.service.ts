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
    return `This action returns all riders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rider`;
  }

  update(id: number, updateRiderDto: UpdateRiderDto) {
    return `This action updates a #${id} rider`;
  }

  remove(id: number) {
    return `This action removes a #${id} rider`;
  }
}
