import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/module/auth.module';
import { BoardRepository } from '../repository/board.repository';
import { BoardsController } from '../controller/boards.controller';
import { BoardsService } from '../../../domain/boards/boards.service';
import { Board } from 'src/domain/entity/board.entity';
import { IBoardRepository, IBoardService } from 'src/ports/board.interface';

@Module({
  imports: [TypeOrmModule.forFeature([Board]), AuthModule],
  controllers: [BoardsController],
  providers: [
    BoardsService,
    {
      provide: IBoardRepository,
      useClass: BoardRepository,
    },
  ],
})
export class BoardsModule {}
