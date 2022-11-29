import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from 'src/board/domain/board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValue(value)) {
      throw new BadRequestException('Bad Req');
    }

    return value;
  }

  private isStatusValue(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
