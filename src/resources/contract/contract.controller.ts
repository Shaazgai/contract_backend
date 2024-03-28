import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { ContractDto } from './contract.dto';
import { ContractService } from './contract.service';
@ApiTags('Contarct')
@Controller('contract')
export class ContractController {
  constructor(private service: ContractService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() dto: ContractDto, @Request() { user }) {
 
    return await  this.service.create(dto, user);
  }
  
  @UseGuards(AuthGuard)
  @Put("/:id")
  @ApiParam({name: 'id'})
  async put(@Body() dto: ContractDto, @Param('id') id: string, @Request() { user }) {

    return await  this.service.put(dto, id, user);
  }
  
  
  
  
  @Get('/executer/:mail/:id')
  @ApiParam({name: 'mail'})
  @ApiParam({name: 'id'})
  executer(@Param('mail') mail: string, @Param('id') id: string) {
    return this.service.executer(mail, id)
  }
  @Get('/get/:id')
  @UseGuards(AuthGuard)
  @ApiParam({name: 'id'})
  get(@Param('id') id: string, @Request() {user}) {
    return this.service.get( id)
  }
}
