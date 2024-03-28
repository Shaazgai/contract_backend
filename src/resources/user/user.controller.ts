import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private service: UserService){}
    @Get('/:email')
    @ApiParam({name: 'email'})
    getUserByEmail(@Param('email') email: string) {
        return this.service.getUserByEmail(email)
    }   
}
