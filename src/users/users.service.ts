import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    } catch (error) {
      throw new Error(error);
    }

  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, { new: true }).exec();
    } catch (error) {
      throw new Error('Erro ao atualizar usuário');
    }
  }

  remove(id: string): string {
    this.userModel.deleteOne({ _id: id }).exec();
    return `User removed with id: ${id}`;
  }
}
