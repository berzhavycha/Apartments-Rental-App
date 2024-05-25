import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min, IsNumber } from 'class-validator';

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
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(999)
    description: string;
}