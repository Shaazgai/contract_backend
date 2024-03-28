import { Address } from "@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEmailDto {
    @ApiProperty()
    from?: Address
    @ApiProperty()
    recipients: string[]
    @ApiProperty()
    subject: string 
    @ApiProperty()
    html: string 
    @ApiProperty()
    text?:string
    // ph: string
}