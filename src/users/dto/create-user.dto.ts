import { IsArray, IsEmail, IsEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  userGithub: string;

  @IsEmpty()
  avatarURL: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  city: string;

  @IsString()
  formation: string;

  @IsArray()
  tecnologies: string[];
}
