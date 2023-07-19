import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Person } from '../utility/person';
import { Transactions } from './transactions';
import { Banker } from './banker';

@Entity('client')
export class Client extends Person {
  @Column({
    type: 'numeric',
    name: 'balance',
  })
  balance: number;

  @Column({
    default: true,
    name: 'active',
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  addtionalInfo: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: 'simple-array',
    default: [],
  })
  family_Members: string[];

  @OneToMany(() => Transactions, (transaction) => transaction.client, {
    eager: true,
  })
  transactions: Transactions[];

  @ManyToMany(() => Banker, {
    cascade: false,
  })
  bankers: Banker[];

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

// @OneToMany(() => Transactions, (transaction) => transaction.client)
// transactions: Transactions[];
//*this one to many decorator doesn't hold the foriegn key basically it's just for the to make the relationship

//*in one to many we tell on the side that contains the forigen id of that set the forigh key to be the set null
