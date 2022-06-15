import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

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
  singIn(@Body() authCredentialDto: AuthCredentialDto): Promise<{ accessToken: string }> {
    return this.authService.singIn(authCredentialDto);
  }

  //test용 api.
  //jwt토큰 인증 값이 req에 담기는지 확인하는 api
  //UseGuards는 인증 middleware
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
}
