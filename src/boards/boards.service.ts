import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  //일단 DB는 제외하고 구현
  private boards: Board[] = []; //private를 사용해야 다른 컴포넌트에서 수정 불가

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoards(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
