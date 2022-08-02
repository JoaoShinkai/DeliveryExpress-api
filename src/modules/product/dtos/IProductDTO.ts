import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IProductDTO extends IDefaultDTO {
  name: string;
  price: number;
  description: string;
  available: number;
  category: ICategoryDTO;
}
