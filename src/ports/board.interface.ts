import { User } from '../domain/auth/user.entity';
import { BoardStatus } from '../domain/boards/board-status.enum';
import { Board } from '../domain/boards/board.entity';
import { CreateBoardDto } from '../domain/boards/dto/create-board.dto';
import { DeleteResult } from 'typeorm';

export interface IBoardService {
  getBoardById: (id: number) => Promise<Board>;
  getAllBoards: (user: User) => Promise<Board[]>;
  createBoard: (createBoardDto: CreateBoardDto, user: User) => Promise<Board>;
  deleteBoard: (id: number, user: User) => Promise<void>;
  updateBoardStatus: (id: number, status: BoardStatus) => Promise<Board>;
}

export interface IBoardRepository {
  findBoardById: (id: number) => Promise<Board>;
  findAllBoardsByUserId: (user: User) => Promise<Board[]>;
  createBoard: (createBoardDto: CreateBoardDto, user: User) => Promise<Board>;
  deleteBoardById: (id: number, user: User) => Promise<DeleteResult>;
  updateBoardStatus: (id: number, status: BoardStatus) => Promise<Board>;
}
