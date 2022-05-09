import { Module } from '@nestjs/common';
import { RidersService } from './riders.service';
import { RidersController } from './riders.controller';
import { Rider } from './entities/rider.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RidersController],
  providers: [RidersService],
  imports: [TypeOrmModule.forFeature([Rider])]
})
export class RidersModule {}
