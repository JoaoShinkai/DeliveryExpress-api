import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Order } from '@modules/order/infra/typeorm/entities/Order';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
}
