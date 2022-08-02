import { OptionAdditional } from '@modules/optionAdditional/infra/typeorm/entities/OptionAdditional';
import { IUserProductOptionAdditionalDTO } from '@modules/userProduct/dtos/IUserProductOptionAdditionalDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserProduct } from './UserProduct';

@Entity('userproduct_optionadditional')
export class UserProductOptionAdditional
  extends DefaultEntity
  implements IUserProductOptionAdditionalDTO
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => OptionAdditional)
  @JoinColumn()
  optionAdditional: OptionAdditional;

  @ManyToOne(() => UserProduct, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  userProduct: UserProduct;
}
