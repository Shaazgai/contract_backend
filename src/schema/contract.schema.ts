import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ContractStatus, ContractType, PartyType } from 'src/utils/enum';

export type ContractDocument = Document & Contract;

export class Party {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'users' })
  user: string;
  @Prop({ enum: PartyType })
  type: PartyType;
  @Prop()
  signature?: string;
  @Prop()
  registerNumber?: string
  @Prop()
  username: string
  @Prop()
    phone?: string
    @Prop()
    email: string
    @Prop()
    verified: boolean
  }

@Schema({ timestamps: true, toJSON: { getters: true, minimize: false } })
export class Contract {
  @Prop()
  contractName: string;

  @Prop()
  file: string[];


  @Prop({ default: false })
  verified: boolean;

  @Prop({ type: Array<Party>, default: [] })
  files: Party[];

  @Prop({ enum: ContractStatus, default: ContractStatus.pending })
  status: ContractStatus;
  @Prop({ enum: ContractType,  })
  type: ContractType;


  @Prop()
  startDate: string
  @Prop()
  endDate: string
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
