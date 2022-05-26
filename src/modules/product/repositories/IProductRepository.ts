import { IProductDTO } from '../dtos/IProductDTO';

export interface IProductRepository {
  create(product: IProductDTO): Promise<void>;
  find(): Promise<IProductDTO[]>;
  update(id: number, data: Partial<IProductDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
