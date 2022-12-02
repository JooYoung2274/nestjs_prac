import { User } from '../../../auth/user.entity';
import { BoardStatus } from '../board-status.enum';
import { Board } from '../../adapters/model/board.entity';

import { DeleteResult } from 'typeorm';
import { CreateBoardDto } from '../dto/create-board.dto';

export interface IBoardRepository {
  findBoardById(id: number): Promise<Board>;
  findAllBoardsByUserId(user: User): Promise<Board[]>;
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
  deleteBoardById(id: number, user: User): Promise<DeleteResult>;
  updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}

export const IBoardRepository = Symbol('IBoardRepository');


