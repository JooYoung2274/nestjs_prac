import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createSecureServer } from 'http2';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto.ts';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }
}
