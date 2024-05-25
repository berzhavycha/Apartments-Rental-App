import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { Apartment } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  controllers: [ApartmentsController],
  providers: [ApartmentsService]
})
export class ApartmentsModule {}
