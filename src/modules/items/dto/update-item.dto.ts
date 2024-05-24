import { CreateItemDto } from './create-item.dto';
import { OmitType, PartialType } from '@nestjs/swagger';

export class UpdateItemDto extends PartialType(
  OmitType(CreateItemDto, ['id'] as const),
) {}
