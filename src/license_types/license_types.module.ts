import { Module } from '@nestjs/common';
import { LicenseTypesService } from './license_types.service';
import { LicenseTypesController } from './license_types.controller';
import { LicenseType } from './entities/license_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LicenseTypesController],
  providers: [LicenseTypesService],
  imports: [TypeOrmModule.forFeature([LicenseType])]
})
export class LicenseTypesModule {}
