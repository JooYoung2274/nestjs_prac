import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  //일단 DB는 제외하고 구현
  private boards = []; //private를 사용해야 다른 컴포넌트에서 수정 불가

  getAllBoards() {
    return this.boards;
  }
}
