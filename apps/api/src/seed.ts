import { faker } from '@faker-js/faker';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DogEntity } from './app/dogs/dog.entity';
import { v4 } from 'uuid';
import { DogService } from './app/dogs/dog.service';

async function seed() {
  const length = 5000;
  const dogs: DogEntity[] = Array.from({ length }, (_, i) => ({
    id: v4(),
    name: faker.name.middleName(i % 2 === 0 ? 'male' : 'female'),
    breed: faker.animal.dog(),
    age: faker.random.numeric(1),
    photoUrl: faker.image.animals(1000, 750),
  }));

  const app = await NestFactory.createApplicationContext(AppModule);

  console.log('Establishing database connection...');
  const service = app.get(DogService);

  console.log('Breeding dogs...');
  await service.dogsRepository.save(dogs);

  console.log('Done...');

  process.exit();
}

seed();
