import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contract, ContractDocument } from 'src/schema/contract.schema';
import { ContractDto } from './contract.dto';
import { UserDocument } from 'src/schema/user.schema';
import { PartyType } from 'src/utils/enum';
@Injectable()
export class ContractService {
  constructor(
    @InjectModel(Contract.name) private model: Model<ContractDocument>,
  ) {}

  async create(dto: ContractDto, user: UserDocument) {
    try {

      const res = await this.model.create({
        type: dto.type,
        files: [
          {
            user: user._id, 
            type: PartyType.subscriber,

  username: user.username,


    email: user.email,

    verified: true
          }
        ]
      });

      return res;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, 500);
    }
  }
  async put(dto: ContractDto, id: string, user: UserDocument) {
    try {

      const res = await this.model.findByIdAndUpdate( id, {
        files: [
          {
            user: user._id,
            email: dto.files[0].email,
            username: dto.files[0].username,
            phone: dto.files[0].phone,
            registerNumber: dto.files[0].registerNumber,
            verified: dto.files[0].verified,
          },
          {
      
            email: dto.files[1].email,
            username: dto.files[1].username,
            phone: dto.files[1].phone,
            registerNumber: dto.files[1].registerNumber,
            verified: dto.files[1].verified,
          },
        ],
        endDate: dto.endDate, 
        startDate: dto.startDate,
        file: dto.file
      });
      return res;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, 500);
    }
  }
  async executer(mail: string, id: string) {
    try {
      
      const res = await this.model.findByIdAndUpdate(id, {
        $addToSet: {
          files:  {
            email: mail,
            type: PartyType.executer,
            verified: true
          }
        }
      });

      return res;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, 500);
    }
  }
  async get( id: string) {
    try {
      return await this.model.findById(id)
    

    } catch (error) {
      console.log(error);
      throw new HttpException(error, 500);
    }
  }



}
