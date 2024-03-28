import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import * as nodemailer from 'nodemailer'
import { CreateEmailDto } from "./mail.dto";
import { MailerService } from "@nestjs-modules/mailer";
@Injectable()
export class EmailService {
    constructor( private service: MailerService) {
        
    }
    async sendEmail(dto: CreateEmailDto) {
        const { recipients, subject, id } = dto

        try {
     await this.service.sendMail({
                to:  recipients,
                subject: subject, 
                html: `<a href='http://localhost:3000/contract/create/${id}?user=${recipients[0]}' target="_blank">Link</a>`, 
              })
 
     
            return true
        } catch (error) {
            return false
            console.log(error);
        }
    } 
}