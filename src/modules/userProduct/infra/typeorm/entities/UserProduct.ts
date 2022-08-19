import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { IUserProductDTO } from '@modules/userProduct/dtos/IUserProductDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from '../../../../user/infra/typeorm/entities/User';
import { UserProductOptionAdditional } from './UserProductOptionAdditional';

@Entity('user_product')
export class UserProduct extends DefaultEntity implements IUserProductDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, { nullable: false })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToMany(
    () => UserProductOptionAdditional,
    additional => additional.userProduct,
    {
      onDelete: 'CASCADE',
      cascade: true
    }
  )
  @JoinColumn()
  additionals: UserProductOptionAdditional[];

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
}
