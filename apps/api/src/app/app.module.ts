import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user',
      password: 'password',
      database: 'dogs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DogsModule,
  ],
  exports: [],
})
export class AppModule {}
