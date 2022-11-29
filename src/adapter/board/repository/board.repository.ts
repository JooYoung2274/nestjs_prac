import { User } from '../../../domain/entity/user.entity';
import { DeleteResult, EntityRepository, Repository, UpdateResult } from 'typeorm';
import { BoardStatus } from '../../../domain/boards/board-status.enum';
import { Board } from '../../../domain/entity/board.entity';
import { CreateBoardDto } from '../../../domain/boards/dto/create-board.dto';
import { IBoardRepository } from 'src/ports/board.interface';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> implements IBoardRepository {
  async findBoardById(id: number): Promise<Board> {
    const result = await this.findOne(id);

    return result;
  }

  async findAllBoardsByUserId(user: User): Promise<Board[]> {
    const query = this.createQueryBuilder('board');
    query.where('board.userId = :userId', { userId: user.id });

    const result = await query.getMany();
    return result;
  }

  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = createBoardDto;

    const result = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await result.save();

    return result;
  }

  async deleteBoardById(id: number, user: User): Promise<DeleteResult> {
    const result = this.delete({ id, user });
    return result;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const result = await this.findBoardById(id);
    result.status = status;
    await result.save();
    return result;
  }
}
