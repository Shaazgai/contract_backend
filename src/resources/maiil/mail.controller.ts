import { Body, Controller, Post } from "@nestjs/common";

import { CreateEmailDto } from "./mail.dto";
import { EmailService } from "./mail.service";
import { ApiTags } from "@nestjs/swagger";
@Controller()
@ApiTags('mail')
export class MailController {
    constructor(private service: EmailService) {}
    @Post('send')
    testMail(@Body() dto: CreateEmailDto) {
        return this.service.sendEmail(dto)
    }
}