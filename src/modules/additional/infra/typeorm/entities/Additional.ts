import { IAdditionalDTO } from '@modules/additional/dtos/IAdditionalDTO';
import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Additional extends DefaultEntity implements IAdditionalDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  multiple: number;

  @Column()
  productId: number;

  @ManyToOne(() => Product, () => Additional, { onDelete: 'CASCADE' })
  product: Product;
}
