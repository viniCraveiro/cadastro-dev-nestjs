import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  userGithub: string;

  @IsUrl()
  @IsOptional()
  avatarURL: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  city: string;

  @IsString()
  formation: string;

  @IsString()
  technologies: string;
}
