import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BoardsModule } from './board/board.module';
import { typeORMconfig } from './configs/typeorm.config';

// 어차피 App.module에 import해야 하는데 왜
// BoardModule, AuthModule은 각자의 디렉토리에 위치해 있을까?
// => 앞으로 쓰여질 도메인 디렉토리에 위치하는 것이 더 명확한 구조를 생성한다고
// Nest.js 공식문서에 나와있음. 공식문서피셜임
@Module({
  imports: [TypeOrmModule.forRoot(typeORMconfig), BoardsModule, AuthModule],
})
export class AppModule {}
