import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ContractStatus, PartyType } from 'src/utils/enum';

export type ContractDocument = Document & Contract;

export class Party {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'users' })
  user: string;
  @Prop({ enum: PartyType })
  type: PartyType;
  @Prop()
  signature?: string;
}

@Schema({ timestamps: true, toJSON: { getters: true, minimize: false } })
export class Contract {
  @Prop()
  contractName: string;

  @Prop({ required: true })
  file: string;

  @Prop({ default: false })
  verified: boolean;

  @Prop({ type: Array<Party>, default: [] })
  files: Party[];

  @Prop({ enum: ContractStatus, default: ContractStatus.pending })
  status: ContractStatus;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
