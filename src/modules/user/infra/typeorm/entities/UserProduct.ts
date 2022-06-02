import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { IUserProductDTO } from '@modules/user/dtos/IUserProductDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './User';

@Entity('user_product')
export class UserProduct extends DefaultEntity implements IUserProductDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, { nullable: false, eager: true })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Column()
  quantity: number;

  @Column({ name: 'unity_price', type: 'decimal', precision: 10, scale: 2 })
  unityPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  discount: number;

  @Column({ nullable: true })
  observation: string;

  @Column()
  userId: number;
}
