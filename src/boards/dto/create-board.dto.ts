import { IsNotEmpty } from 'class-validator';
//pipe 사용한 validate 

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
