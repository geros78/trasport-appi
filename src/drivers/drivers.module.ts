import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { Driver } from './entities/driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DriversController],
  providers: [DriversService],
  imports: [TypeOrmModule.forFeature([Driver])]
})
export class DriversModule {}
