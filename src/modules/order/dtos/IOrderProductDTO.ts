import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IOrderDTO } from './IOrderDTO';
import { IOrderProductOptionAdditionalDTO } from './IOrderProductOptionAdditionalDTO';

export interface IOrderProductDTO extends IDefaultDTO {
  product: IProductDTO;
  order: IOrderDTO;
  productId?: number;
  orderId?: number;
  quantity: number;
  unityPrice: number;
  amount: number;
  discount: number;
  observation: string;
  additionals: IOrderProductOptionAdditionalDTO[];
}
