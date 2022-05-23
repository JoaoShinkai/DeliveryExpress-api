import { ICategoryDTO } from "@modules/category/dtos/ICategoryDTO";
import { Store } from "@modules/store/infra/typeorm/entities/Store";
import { DefaultEntity } from "@shared/infra/typeorm/entities/DefaultEntity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
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
}
