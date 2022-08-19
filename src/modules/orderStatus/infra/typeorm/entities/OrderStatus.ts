import { IOrderStatusDTO } from '@modules/orderStatus/dtos/IOrderStatusDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_status')
export class OrderStatus extends DefaultEntity implements IOrderStatusDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
