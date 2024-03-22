import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contract, ContractDocument } from 'src/schema/contract.schema';
import { ContractDto } from './contract.dto';
@Injectable()
export class ContractService {
  constructor(
    @InjectModel(Contract.name) private model: Model<ContractDocument>,
  ) {}

  async create(dto: ContractDto) {
    try {
      const res = await this.model.create(dto);
      return res;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
