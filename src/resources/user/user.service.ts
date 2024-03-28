import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { UserDto } from './user.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

  async getUserByEmail(email: string) {
    try {
      
      return await this.model.findOne({email: email})
    } catch (error) {
      throw new HttpException(`${error}`, 500)
    }
  }

  async getUser(data: string) {
    try {
      const res = await this.model.findOne({
        $or: [
          {
            phone: data,
          },
          {
            email: data,
          },
        ],
      });
      return res;
    } catch (error) {
      throw new HttpException('Error', 401);
    }
  }

  async create(dto: UserDto) {
    try {
      const res = await this.model.create(dto);
      return res;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
