import { Additional } from '@modules/additional/infra/typeorm/entities/Additional';
import { IOptionAdditionalDTO } from '@modules/optionAdditional/dtos/IOptionAdditionalDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('optionadditional')
export class OptionAdditional
  extends DefaultEntity
  implements IOptionAdditionalDTO
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ default: 1 })
  available: number;

  @Column()
  additionalId: number;

  @ManyToOne(() => Additional, () => OptionAdditional, { onDelete: 'CASCADE' })
  additional: Additional;
}
