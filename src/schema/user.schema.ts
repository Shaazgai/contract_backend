  import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
  import { Document } from 'mongoose';
  import { UserStatus, UserType } from 'src/utils/enum';

  export type UserDocument = Document & User;

  @Schema({ timestamps: true, toJSON: { getters: true, minimize: false } })
  export class User {
    @Prop()
    username: string;

    @Prop()
    profileImg?: string;

    @Prop()
    phone: string;

    @Prop({ type: String, enum: UserType, default: UserType.default })
    userType: UserType;

    @Prop({ required: true })
    email: string;

    @Prop()
    password: string;
    @Prop({ default: false })
    verified: boolean;

    @Prop({ type: Array<string>, default: [] })
    files: string[];

    @Prop({ enum: UserStatus, default: UserStatus.checking })
    status: UserStatus;
  }

  export const UserSchema = SchemaFactory.createForClass(User);
