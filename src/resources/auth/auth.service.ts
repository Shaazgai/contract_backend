import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import appConfig from 'src/config/app.config';
import {sign} from 'jsonwebtoken'
import { LoginUser } from './auth.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { UserStatus } from 'src/utils/enum';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {
        
    }
    async signPayload(payload: string) {
        return sign(payload, appConfig().appSecret);
      }
    async login(dto: LoginUser) {
        try {
          dto.email = dto.email.toLowerCase()
          if (dto.email != null) {
            let user = await this.model.findOne({ email: dto.email });
    
            if (!user) user = await this.registerGoogle(dto);
            return { status: true, user: user };
          }
          else {
            return {status: true, user: 'Хоосон байна'}
          }
        } catch (e) {
          throw new HttpException(e.message, HttpStatus.FORBIDDEN);
        }
      }
      async registerGoogle(dto: LoginUser) {
        try {
          return await this.model.create({
            username: dto.name,
            email: dto.email,
            profileImg: dto.profileImg,
            status: UserStatus.active,
          });
        } catch (error) {
          throw new HttpException(error.message, HttpStatus.FORBIDDEN);
        }
      }
}


