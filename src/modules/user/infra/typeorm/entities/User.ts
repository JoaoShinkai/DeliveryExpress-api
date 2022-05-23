import { IUserDTO } from "@modules/user/dtos/IUserDTO";
import { DefaultEntity } from "@shared/infra/typeorm/entities/DefaultEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User extends DefaultEntity implements IUserDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ name: "birth_date" })
  birthDate: Date;
}
