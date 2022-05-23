import { IStoreDTO } from "@modules/store/dtos/IStoreDTO";
import { DefaultEntity } from "@shared/infra/typeorm/entities/DefaultEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("store")
export class Store extends DefaultEntity implements IStoreDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  delivery: number;

  @Column()
  status: number;
}
