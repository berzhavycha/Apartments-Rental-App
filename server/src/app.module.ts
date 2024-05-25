import { Module } from '@nestjs/common';

import { ApartmentsModule } from '@modules/apartments';
import { ConfigModule } from '@modules/config';
import { DatabaseModule } from '@modules/database';

@Module({
  imports: [DatabaseModule, ConfigModule, ApartmentsModule],
})
export class AppModule {}
