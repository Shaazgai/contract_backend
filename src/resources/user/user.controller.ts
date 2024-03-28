import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guard/auth.guard';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private service: UserService){}
    @Get('/get/:email')
    @ApiParam({name: 'email'})
    getUserByEmail(@Param('email') email: string) {
        return this.service.getUserByEmail(email)
    }   

    @UseGuards(AuthGuard)
    @Get('me')
    me(@Request() {user}) {
        
        return user

    }
}
