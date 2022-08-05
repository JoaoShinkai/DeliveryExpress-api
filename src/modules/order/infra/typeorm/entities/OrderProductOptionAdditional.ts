import { OptionAdditional } from '@modules/optionAdditional/infra/typeorm/entities/OptionAdditional';
import { IOrderProductDTO } from '@modules/order/dtos/IOrderProductDTO';
import { IOrderProductOptionAdditionalDTO } from '@modules/order/dtos/IOrderProductOptionAdditionalDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { OrderProduct } from './OrderProduct';

@Entity('orderproduct_optionadditional')
export class OrderProductOptionAdditional
  extends DefaultEntity
  implements IOrderProductOptionAdditionalDTO
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => OptionAdditional, { nullable: false })
  @JoinColumn()
  optionAdditional: OptionAdditional;

  @ManyToOne(() => OrderProduct, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  orderProduct: IOrderProductDTO;
}
