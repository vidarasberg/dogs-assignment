import { Controller, Get, Param } from '@nestjs/common';
import { DogEntity } from './dog.entity';
import { DogService } from './dog.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogService) {}

  @Get('')
  async getDogs(): Promise<DogEntity[]> {
    return this.dogsService.getAll();
  }

  @Get(':id')
  async getDogById(@Param('id') id: string): Promise<DogEntity | undefined> {
    return this.dogsService.getById(id);
  }
}
