import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateApartmentDto } from './dtos';
import { Apartment } from './entities';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}

  async findAll(): Promise<Apartment[]> {
    return await this.apartmentRepository.find();
  }

  async findOne(id: string): Promise<Apartment> {
    const apartment = await this.apartmentRepository.findOne({ where: { id } });
    if (!apartment) {
      throw new NotFoundException('Apartment not found');
    }
    return apartment;
  }

  async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    const apartment = this.apartmentRepository.create(createApartmentDto);
    return await this.apartmentRepository.save(apartment);
  }

  async delete(id: string): Promise<{ message: string }> {
    const result = await this.apartmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Apartment not found');
    }
    return { message: 'Apartment deleted successfully' };
  }
}
