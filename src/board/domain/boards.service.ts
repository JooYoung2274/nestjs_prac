import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from '../adapters/model/board.entity';
import { User } from '../../auth/user.entity';
import { IBoardService } from './inboundPorts/IBoardService';

import { IBoardRepository } from './outboundPorts/IBoardRepository';

@Injectable()
export class BoardsService implements IBoardService {
  constructor(@Inject(IBoardRepository) private boardReposity: IBoardRepository) {}

  async getBoardById(id: number): Promise<Board> {
    const result = await this.boardReposity.findBoardById(id);

    if (!result) {
      throw new NotFoundException(`Can't fine Board with id ${id}`);
    }
    return result;
  }

  async getAllBoards(user: User): Promise<Board[]> {
    const result = await this.boardReposity.findAllBoardsByUserId(user);
    return result;
  }

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const result = await this.boardReposity.createBoard(createBoardDto, user);

    return result;
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.boardReposity.deleteBoardById(id, user);

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
