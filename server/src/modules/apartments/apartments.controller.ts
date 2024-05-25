import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
} from '@nestjs/common';

import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dtos';
import { Apartment } from './entities';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) { }

    @Get()
    findAll(): Promise<Apartment[]> {
        return this.apartmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Apartment> {
        return this.apartmentsService.findOne(id);
    }

    @Post()
    create(@Body() createApartmentDto: CreateApartmentDto): Promise<Apartment> {
        return this.apartmentsService.create(createApartmentDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<{ message: string }> {
        return this.apartmentsService.delete(id);
    }
}
