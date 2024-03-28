import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { ContractDto } from './contract.dto';
import { ContractService } from './contract.service';
@ApiTags('Contarct')
@Controller('contract')
export class ContractController {
  constructor(private service: ContractService) {}

  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: ContractDto, @Request() { user }) {
    return this.service.create(dto);
  }
}
