import { User } from 'src/auth/user.entity';
import { BoardStatus } from 'src/boards/board-status.enum';
import { Board } from 'src/boards/board.entity';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';

export interface BoardService {
  getBoardById(id: number): Promise<Board>;
  getAllBoards(user: User): Promise<Board[]>;
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
  deleteBoard(id: number, user: User): Promise<void>;
  updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}

export interface BoardRepo {
  findBoardById(id: number): Promise<Board>;
  findAllBoardsByUserId(user: User): Promise<Board[]>;
}
