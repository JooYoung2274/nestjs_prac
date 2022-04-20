import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards') //http://localhost:3000/boards
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
