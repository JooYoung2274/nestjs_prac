import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from '../../../domain/boards/boards.service';
import { BoardStatus } from '../../../domain/boards/board-status.enum';
import { CreateBoardDto } from '../../../domain/boards/dto/create-board.dto';

import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../../common/decorators/get-user.decorator';
import { User } from '../../../domain/entity/user.entity';
import { BoardStatusValidationPipe } from 'src/common/pipe/board-status-validation.pipe';
import { Board } from 'src/domain/entity/board.entity';

@Controller('boards') //http://localhost:3000/boards
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('BoardsController');

  constructor(private boardsService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Get('/')
  getAllBoards(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User "${user.username}" trying to get all boards`);
    return this.boardsService.getAllBoards(user);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto, @GetUser() user: User): Promise<Board> {
    this.logger.verbose(`User "${user.username}" creating a new board}\ Payload: ${JSON.stringify(createBoardDto)}`);
    return this.boardsService.createBoard(createBoardDto, user);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<void> {
    return this.boardsService.deleteBoard(id, user);
  }

  @Patch('/:id/status')
  updateBoardStatus(@Param('id', ParseIntPipe) id: number, @Body('status', BoardStatusValidationPipe) status: BoardStatus): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
