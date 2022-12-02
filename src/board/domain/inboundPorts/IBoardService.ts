import { User } from '../../../auth/user.entity';
import { BoardStatus } from '../board-status.enum';
import { Board } from '../../adapters/model/board.entity';
import { CreateBoardDto } from '../dto/create-board.dto';

export interface IBoardService {
  getBoardById(id: number): Promise<Board>;
  getAllBoards(user: User): Promise<Board[]>;
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
  deleteBoard(id: number, user: User): Promise<void>;
  updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}

export const IBoardService = Symbol('IBoardService');



