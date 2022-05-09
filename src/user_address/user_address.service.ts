import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserAddressDto } from './dto/create-user_address.dto';
import { UpdateUserAddressDto } from './dto/update-user_address.dto';
import { UserAddress } from './entities/user_address.entity';

@Injectable()
export class UserAddressService {

  constructor(
    @InjectRepository(UserAddress)
    private user_addressRepository: Repository<UserAddress>,
  ){}

  create(createUserAddressDto: CreateUserAddressDto) {
    const result = this.user_addressRepository.save(createUserAddressDto);
    return result;
  }

  findAll() {
    return this.user_addressRepository.find();
  }

  findOne(id: number) {
    return this.user_addressRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserAddressDto) {
    const result = await this.user_addressRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.user_addressRepository.delete(id);
  }
}


