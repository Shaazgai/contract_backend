import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { UserStatus } from 'src/utils/enum';

export class UserDto {
  @IsEmail()
  @IsString()
  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  profileImg?: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;
  @ApiProperty({ type: Boolean })
  verified: boolean;

  @ApiProperty({ isArray: true })
  files: string[];

  @ApiProperty({ enum: UserStatus, default: UserStatus.checking })
  status: UserStatus;
}
