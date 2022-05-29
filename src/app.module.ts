import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMconfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMconfig), BoardsModule],
})
export class AppModule {}
