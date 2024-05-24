import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class GlobalEntity {
  @Column({ type: 'varchar', length: 50 })
  create_by: string;

  @CreateDateColumn({ type: 'timestamp' })
  create_date: Date;

  @Column({ type: 'varchar', length: 50 })
  update_by: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date: Date;

  @Column({ type: 'varchar', length: 8 })
  created_client_id: string;

  @Column({ type: 'varchar', length: 8 })
  updated_client_id: string;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  delete_date: Date;
}
