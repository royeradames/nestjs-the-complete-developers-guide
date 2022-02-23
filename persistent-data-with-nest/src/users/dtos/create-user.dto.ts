import { IsEmail, IsString } from 'class-validator';
/* unlike naming a type, the naming convention for a dto is adding dto to the end. Dto handles type and validation */
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
