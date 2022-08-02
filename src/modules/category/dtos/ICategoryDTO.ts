import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface ICategoryDTO extends IDefaultDTO {
  name: string;
  icon: string;
  products: IProductDTO[];
}
