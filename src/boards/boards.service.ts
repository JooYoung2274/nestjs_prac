import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository) // controller에 service 주입할때와 다르게 repo를 service에 주입하려면 요 데코레이터 써야함.
    private boardReposity: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const result = await this.boardReposity.findBoardById(id);

    if (!result) {
      throw new NotFoundException(`Can't fine Board with id ${id}`);
    }
    return result;
  }

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const result = await this.boardReposity.createBoard(createBoardDto, user);

    return result;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardReposity.deleteBoardById(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const result = await this.boardReposity.updateBoardStatus(id, status);
    console.log(result);
    return result;
  }
}
