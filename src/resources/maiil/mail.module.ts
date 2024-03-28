import { Module } from "@nestjs/common";
import { MailController } from "./mail.controller";
import { EmailService } from "./mail.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports:[ConfigModule],
    controllers: [MailController],
    providers:[EmailService]
})
export class MailModule {}