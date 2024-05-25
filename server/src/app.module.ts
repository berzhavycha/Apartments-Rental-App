import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from './modules/config/config.module';
import { ApartmentsModule } from './modules/apartments/apartments.module';

@Module({
  imports: [DatabaseModule, ConfigModule, ApartmentsModule],
})
export class AppModule {}
