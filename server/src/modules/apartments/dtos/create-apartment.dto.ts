import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateApartmentDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  rooms: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(99)
  name: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(999)
  description: string;
}
