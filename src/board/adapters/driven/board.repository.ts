import { User } from '../../../auth/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { BoardStatus } from '../../domain/board-status.enum';
import { Board } from '../model/board.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IBoardRepository } from 'src/board/domain/outboundPorts/IBoardRepository';
import { CreateBoardDto } from 'src/board/domain/dto/create-board.dto';

@Injectable()
export class BoardRepository implements IBoardRepository {
  constructor(@InjectRepository(Board) private boardRepository: Repository<Board>) {}
  async findBoardById(id: number): Promise<Board> {
    const result = await this.boardRepository.findOne(id);

    return result;
  }

  async findAllBoardsByUserId(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');
    query.where('board.userId = :userId', { userId: user.id });

    const result = await query.getMany();
    return result;
  }

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = createBoardDto;

    const result = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.boardRepository.save(result);

    return result;
  }

  async deleteBoardById(id: number, user: User): Promise<DeleteResult> {
    const result = await this.boardRepository.delete({ id, user });
    return result;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const result = await this.findBoardById(id);
    result.status = status;
    await this.boardRepository.save(result);
    return result;
  }
}
