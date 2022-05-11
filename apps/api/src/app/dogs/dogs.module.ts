import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DogsController } from './dog.controller';
import { DogEntity } from './dog.entity';
import { DogService } from './dog.service';

@Module({
  imports: [TypeOrmModule.forFeature([DogEntity])],
  controllers: [DogsController],
  providers: [DogsController, DogService],
  exports: [DogsController],
})
export class DogsModule {}
