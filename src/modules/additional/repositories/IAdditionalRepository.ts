import { IAdditionalDTO } from '../dtos/IAdditionalDTO';

export interface IAdditionalRepository {
  create(additional: IAdditionalDTO): Promise<void>;
  find(): Promise<IAdditionalDTO[]>;
  findByProduct(productId: number): Promise<IAdditionalDTO[]>;
  update(id: number, data: Partial<IAdditionalDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
