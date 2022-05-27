import { Additional } from '@modules/additional/infra/typeorm/entities/Additional';
import { Category } from '@modules/category/infra/typeorm/entities/Category';
import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Product extends DefaultEntity implements IProductDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  available: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, () => Product)
  category: Category;

  @OneToMany(() => Additional, () => Product, { onDelete: 'CASCADE' })
  additionals: Additional[];
}
