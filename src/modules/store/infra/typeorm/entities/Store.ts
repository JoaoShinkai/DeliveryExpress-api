import { Order } from '@modules/order/infra/typeorm/entities/Order';
import { IStoreDTO } from '@modules/store/dtos/IStoreDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('store')
export class Store extends DefaultEntity implements IStoreDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  delivery: number;

  @Column()
  status: number;

  @OneToMany(() => Order, () => Store)
  orders: Order[];
}
