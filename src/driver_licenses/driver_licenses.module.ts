import { Module } from '@nestjs/common';
import { DriverLicensesService } from './driver_licenses.service';
import { DriverLicensesController } from './driver_licenses.controller';
import { DriverLicense } from './entities/driver_license.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DriverLicensesController],
  providers: [DriverLicensesService],
  imports: [TypeOrmModule.forFeature([DriverLicense])]
})
export class DriverLicensesModule {}
