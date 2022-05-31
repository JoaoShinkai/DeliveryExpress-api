import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IOrderDTO } from './IOrderDTO';

export interface IOrderProductDTO extends IDefaultDTO {
  product: IProductDTO;
  order: IOrderDTO;
  quantity: number;
  unityPrice: number;
  amount: number;
  discount: number;
  observation: string;
}
