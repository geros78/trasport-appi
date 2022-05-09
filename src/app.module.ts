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
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city/entities/city.entity';
import { Driver } from './drivers/entities/driver.entity';
import { Country } from './countries/entities/country.entity';
import { DriverLicense } from './driver_licenses/entities/driver_license.entity';
import { LicenseType } from './license_types/entities/license_type.entity';
import { Rider } from './riders/entities/rider.entity';
import { UserAddress } from './user_address/entities/user_address.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [RidersModule, UsersModule, CountriesModule, CityModule, UserAddressModule,
     DriversModule, DriverLicensesModule, LicenseTypesModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'transport',
    entities: [City, Driver, Country, DriverLicense, LicenseType, Rider, UserAddress, User],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
