import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import appConfig from './config/app.config';
import { ContractModule } from './resources/contract/contract.module';
import { UserModule } from './resources/user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from './resources/maiil/mail.module';
import { AuthModule } from './resources/auth/auth.module';
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),

    MongooseModule.forRoot(appConfig().dbUrl, {
      // useNewUrlParser: true,
      // // useUnifiedTopology: true,

      dbName: appConfig().dbName,
    }),
    UserModule,
    ContractModule,
    MailerModule.forRoot({
      transport: {
        // host: "smtp-mail.outlook.com", 
        service: 'gmail',
    secureConnection: false, 
    secure: true,
    port: 465,
    auth: {
      user: 'b21fa1704@ufe.edu.mn',
        pass: 'epxxxtfryvkuvctv'
    }
      }

    }),
    MailModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
