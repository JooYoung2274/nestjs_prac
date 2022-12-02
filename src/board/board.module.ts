import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { BoardRepository } from './adapters/driven/board.repository';
import { BoardsController } from './adapters/driving/boards.controller';
import { BoardsService } from './domain/boards.service';
import { Board } from 'src/board/adapters/model/board.entity';
import { IBoardRepository } from './domain/outboundPorts/IBoardRepository';
import { IBoardService } from './domain/inboundPorts/IBoardService';

@Module({
  imports: [TypeOrmModule.forFeature([Board]), AuthModule],
  controllers: [BoardsController],
  providers: [
    {
      provide: IBoardService,
      useClass: BoardsService,
    },
    {
      provide: IBoardRepository,
      useClass: BoardRepository,
    },
  ],
})
export class BoardsModule {}


