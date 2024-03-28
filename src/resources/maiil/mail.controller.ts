import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";

import { CreateEmailDto } from "./mail.dto";
import { EmailService } from "./mail.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/guard/auth.guard";
@Controller('mail')
@ApiTags('mail')
export class MailController {
    constructor(private service: EmailService) {}
    @UseGuards(AuthGuard)
    @Post('send')
    testMail(@Body() dto: CreateEmailDto, @Request() {user}) {
    
        dto.subject = `Танд ${user.username}-с урилга ирлээ.`
        return this.service.sendEmail(dto)
    }
}