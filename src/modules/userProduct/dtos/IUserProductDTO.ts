import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IUserDTO } from '../../user/dtos/IUserDTO';
import { IUserProductOptionAdditionalDTO } from './IUserProductOptionAdditionalDTO';

export interface IUserProductDTO extends IDefaultDTO {
  quantity: number;
  unityPrice: number;
  amount: number;
  discount: number;
  observation: string;
  product: IProductDTO;
  user: IUserDTO;
  additionals: IUserProductOptionAdditionalDTO[];
}
