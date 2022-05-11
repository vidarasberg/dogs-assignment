import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogEntity } from './dog.entity';
import { Repository } from 'typeorm';

export type CreateDogParams = Omit<DogEntity, 'id'>;

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(DogEntity)
    public dogsRepository: Repository<DogEntity>
  ) {}

  async getAll(): Promise<DogEntity[]> {
    return this.dogsRepository.find();
  }

  async getById(id: number) {
    return this.dogsRepository.findOne(id);
  }
}
