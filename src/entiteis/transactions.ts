import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from './client';

export enum TransactionsTypes {
  DESPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}
@Entity('transactions')
export class Transactions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: TransactionsTypes,
  })
  type: string;

  @Column({
    type: 'numeric',
  })
  amount: number;

  @CreateDateColumn()
  create_at: string;

  @UpdateDateColumn()
  update_at: string;

  @ManyToOne(() => Client, (client) => client.transactions, {
    cascade: false,
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;
}

//*we set the set on the entity that actually contains the forigen key right so that it can have the forigen key the empty or null

//*when we're defining the one to many or many to one relation we also need to tell that which table it should make the relations with,the first thing we need to tell that what it'll return that

//!  @ManyToOne(() => Client, (client) => client.transaction) so basically what this lines means that the Client we've tell the table whom we want the relationship with but the second thing we also telling the filed like from the second column which field they want the relation with

//*by saying the joing column we're telling this table will contain the foriegn key and that's what important is
