import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Order } from '@modules/order/infra/typeorm/entities/Order';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserProduct } from './UserProduct';

@Entity('user')
export class User extends DefaultEntity implements IUserDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @OneToMany(() => Address, () => User)
  addresses: Address[];

  @OneToMany(() => Order, () => User)
  orders: Order[];

  @OneToMany(() => UserProduct, product => product.user, {
    onDelete: 'CASCADE',
    cascade: true
  })
  @JoinColumn()
  cart: UserProduct[];
}
