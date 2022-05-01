import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidersModule } from './riders/riders.module';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';
import { CityModule } from './city/city.module';
import { UserAddressModule } from './user_address/user_address.module';
import { DriversModule } from './drivers/drivers.module';
import { DriverLicensesModule } from './driver_licenses/driver_licenses.module';
import { LicenseTypesModule } from './license_types/license_types.module';

@Module({
  imports: [RidersModule, UsersModule, CountriesModule, CityModule, UserAddressModule, DriversModule, DriverLicensesModule, LicenseTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
