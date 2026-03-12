import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  @MinLength(8)
  password: string

  @ApiProperty()
  @IsString()
  firstName: string

  @ApiProperty()
  @IsString()
  lastName: string

  @ApiProperty({ enum: ['client', 'provider'], default: 'client' })
  @IsEnum(['client', 'provider'])
  @IsOptional()
  role?: 'client' | 'provider'

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  phone?: string
}
