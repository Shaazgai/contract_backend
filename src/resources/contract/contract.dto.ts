import { ApiProperty } from '@nestjs/swagger';
import { ContractStatus, ContractType, PartyType } from 'src/utils/enum';

export class PartyDto {
  @ApiProperty()
  user: string;
  @ApiProperty({ enum: PartyType })
  type: PartyType;
  @ApiProperty()
  signature?: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string
  @ApiProperty()
  registerNumber: string
  @ApiProperty()
  username: string
  @ApiProperty()
  verified: boolean

}

export class ContractDto {
  @ApiProperty()
  contractName?: string;

  @ApiProperty()
  file?: string[];

  @ApiProperty()
  verified?: boolean;

  @ApiProperty({ type: Array<PartyDto> })
  files?: PartyDto[];

  @ApiProperty({ enum: ContractStatus })
  status?: ContractStatus;
  @ApiProperty({ enum: ContractType })
  type?: ContractType;

  @ApiProperty()
  startDate: string
  @ApiProperty()
  endDate: string
}
