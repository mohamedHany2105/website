import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'; 
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>

  ) {}
async createUser(createUserDto: CreateUserDto) {
  const newUser = this.userRepository.create({
   

    mail: createUserDto.email, 
    password: createUserDto.password,
    Role: "user",
  });

  return await this.userRepository.save(newUser);
}

  async findAllUsers() {
    return await this.userRepository.find();
  }
  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { userId: id } });
  }



  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser= await this.userRepository.update( id , updateUserDto);
    return{
      message: 'User updated successfully',
    }
  }

  async remove(id: number) {
    const user = await this.userRepository.delete(id);
    return  {
      message: 'User deleted successfully',
    };
  }
}
