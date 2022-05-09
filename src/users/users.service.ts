import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

   constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    const result = this.userRepository.save(createUserDto);
    return result;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const result = await this.userRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.userRepository.delete(id);
  }
}
