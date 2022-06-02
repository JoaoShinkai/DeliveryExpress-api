import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IUserProductDTO extends IDefaultDTO {
  quantity: number;
  unityPrice: number;
  amount: number;
  discount: number;
  observation: string;
  product: IProductDTO;
  userId: number;
}
