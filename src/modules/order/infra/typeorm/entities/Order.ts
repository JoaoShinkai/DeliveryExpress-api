import { IOrderDTO } from '@modules/order/dtos/IOrderDTO';
import { Store } from '@modules/store/infra/typeorm/entities/Store';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { OrderProduct } from './OrderProduct';

@Entity('order')
export class Order extends DefaultEntity implements IOrderDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  storeId: number;

  @Column({ default: 1 })
  status: number;

  @Column({ type: 'date', default: 'curdate()' })
  date: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  sent: Date;

  @Column({ nullable: true })
  viewed: Date;

  @Column({ nullable: true })
  conclusion: Date;

  @Column({ name: 'payment_method' })
  paymentMethod: number;

  @Column({
    name: 'change_money',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  changeMoney: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  delivery: number;

  @Column({ default: 0 })
  accepted: number;

  @Column()
  uf: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  reference: string;

  @ManyToOne(() => Store, () => Order)
  store: Store;

  @ManyToOne(() => User, () => Order)
  user: User;

  @OneToMany(() => OrderProduct, product => product.order, { cascade: true })
  @JoinColumn()
  products: OrderProduct[];
}
