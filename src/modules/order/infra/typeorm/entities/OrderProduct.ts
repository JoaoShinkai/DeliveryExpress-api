import { IOrderProductDTO } from '@modules/order/dtos/IOrderProductDTO';
import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Order } from './Order';
import { OrderProductOptionAdditional } from './OrderProductOptionAdditional';

@Entity('order_product')
export class OrderProduct extends DefaultEntity implements IOrderProductDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, { nullable: false, eager: true })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Order, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  order: Order;

  @Column()
  quantity: number;

  @Column({ name: 'unity_price', type: 'decimal', precision: 10, scale: 2 })
  unityPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: '0.00' })
  discount: number;

  @Column({ nullable: true })
  observation: string;

  @OneToMany(
    () => OrderProductOptionAdditional,
    additional => additional.orderProduct,
    {
      onDelete: 'CASCADE',
      cascade: true
    }
  )
  @JoinColumn()
  additionals: OrderProductOptionAdditional[];
}
