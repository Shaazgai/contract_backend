import { ApiProperty } from '@nestjs/swagger';
import { ContractStatus, PartyType } from 'src/utils/enum';

export class PartyDto {
  @ApiProperty()
  user: string;
  @ApiProperty({ enum: PartyType })
  type: PartyType;
  @ApiProperty()
  signature?: string;
}

export class ContractDto {
  @ApiProperty()
  contractName: string;

  @ApiProperty()
  file: string;

  @ApiProperty()
  verified: boolean;

  @ApiProperty({ type: Array<PartyDto> })
  files: PartyDto[];

  @ApiProperty({ enum: ContractStatus })
  status: ContractStatus;
}
