import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user.schema';
import { UserService } from '../user/user.service';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },

      ]),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService],
  })
export class AuthModule {}
