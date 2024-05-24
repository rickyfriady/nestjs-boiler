import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  private context: string = 'items';

  async create(createItemDto: CreateItemDto) {
    await this.itemRepository.insert({
      ...createItemDto,
      create_by: 'ricki',
      update_by: 'ricki',
      created_client_id: '0001',
      updated_client_id: '0001',
    });

    return createItemDto;
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const checkDataExist = await this.itemRepository.findOneBy({ id });

    if (!checkDataExist) throw new Error(this.context);

    return await this.itemRepository.update(id, {
      ...updateItemDto,
      update_by: 'Update ricki',
      updated_client_id: '00101',
    });
  }

  async remove(id: number) {
    const checkDataExist = await this.itemRepository.findOneBy({ id });

    if (!checkDataExist) throw new Error(this.context);

    return await this.itemRepository.delete({ id });
  }
}
