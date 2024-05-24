import { GlobalEntity } from 'src/modules/global.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
export class Item extends GlobalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  // constructor(item: Partial<Item>) {
  //   Object.assign(this, item);
  // }
}
