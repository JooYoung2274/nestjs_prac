import {
  DeleteResult,
  EntityRepository,
  Repository,
  UpdateResult,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async findBoardById(id: number) {
    const result = await this.findOne(id);

    return result;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const result = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await result.save();

    return result;
  }

  async deleteBoardById(id: number): Promise<DeleteResult> {
    const result = this.delete(id);
    return result;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const result = await this.findBoardById(id);
    result.status = status;
    await result.save();
    return result;
  }
}
