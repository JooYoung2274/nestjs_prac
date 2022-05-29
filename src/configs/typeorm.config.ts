import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeORMconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
