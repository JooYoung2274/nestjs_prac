import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { GetUser } from '../common/decorators/get-user.decorator';
import { User } from './user.entity';
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
  //custom decorator 이용해서 바로 user로 받아올 수 있음
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
