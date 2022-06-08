import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { Store } from '@modules/store/infra/typeorm/entities/Store';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('category')
export class Category extends DefaultEntity implements ICategoryDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  storeId: number;

  @ManyToOne(() => Store, () => Category)
  store: Store;

  @OneToMany(() => Product, product => product.category, { eager: true })
  @JoinColumn()
  products: Product[];
}
