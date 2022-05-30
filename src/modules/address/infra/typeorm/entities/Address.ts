import { IAddressDTO } from '@modules/address/dtos/IAddressDTO';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address extends DefaultEntity implements IAddressDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uf: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  reference: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, () => Address)
  user: User;
}
