import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';

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

  @Post('/singin')
  singIn(@Body() authCredentialDto: AuthCredentialDto): Promise<string> {
    return this.authService.singIn(authCredentialDto);
  }
}
