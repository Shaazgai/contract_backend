import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUser } from './auth.dto';
import { UserDocument } from 'src/schema/user.schema';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private service: AuthService){}
    @Post('login')
  @ApiOperation({ description: 'login hiih' })
  async login(@Body() dto: LoginUser) {
    
    const user = await this.service.login(dto);
    if (user.status) {
      const token = await this.service.signPayload((user.user as UserDocument).email);

      return { status: user.status, token };
    } else {
      return { status: user.status, message:  user.user};
    }
  }
}
