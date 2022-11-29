import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/module/auth.module';
import { BoardRepository } from '../repository/board.repository';
import { BoardsController } from '../controller/boards.controller';
import { BoardsService } from '../../../domain/boards/boards.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository]), AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
