import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Person } from '../utility/person';
import { Client } from './client';

@Entity('banker')
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  @ManyToMany(() => Client)
  @JoinTable({
    name: 'banker_clients',
    joinColumn: {
      name: 'banker',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'client',
      referencedColumnName: 'id',
    },
  })
  clients: Client[];

  @CreateDateColumn({
    type: 'time without time zone',
  })
  create_at: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'time without time zone',
  })
  update_at: Date;
}
