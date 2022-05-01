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
    return `This action returns all userAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAddress`;
  }

  update(id: number, updateUserAddressDto: UpdateUserAddressDto) {
    return `This action updates a #${id} userAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAddress`;
  }
}
function User_Address(User_Address: any) {
  throw new Error('Function not implemented.');
}

