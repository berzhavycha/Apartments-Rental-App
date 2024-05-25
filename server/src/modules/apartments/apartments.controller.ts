import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dtos/create-apartment.dto';
import { UpdateApartmentDto } from './dtos/update-apartment.dto';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) {}
    
    @Get()
    findAll() {
        return this.apartmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.apartmentsService.findOne(id);
    }

    @Post()
    create(@Body() createApartmentDto: CreateApartmentDto) {
        return this.apartmentsService.create(createApartmentDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.apartmentsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
        return this.apartmentsService.update(id, updateApartmentDto);
    }
}
