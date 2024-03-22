import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import appConfig from './config/app.config';
import { ContractModule } from './resources/contract/contract.module';
import { UserModule } from './resources/user/user.module';
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
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
