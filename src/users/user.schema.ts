import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  userGithub: string;

  @Prop()
  avatarURL: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  city: string;

  @Prop()
  formation: string;

  @Prop()
  technologies: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
