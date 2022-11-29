import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../../../domain/auth/auth.service';
import { UserRepository } from '../repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../../common/passport/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), //passport, jwt import
    JwtModule.register({
      secret: process.env.JWT_SECRETKEY,
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
