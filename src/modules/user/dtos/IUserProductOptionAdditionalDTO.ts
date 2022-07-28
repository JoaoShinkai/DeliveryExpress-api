import { IOptionAdditionalDTO } from '@modules/optionAdditional/dtos/IOptionAdditionalDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IUserProductDTO } from './IUserProductDTO';

export interface IUserProductOptionAdditionalDTO extends IDefaultDTO {
  name: string;
  price: number;
  optionAdditional: IOptionAdditionalDTO;
  userProduct: IUserProductDTO;
}
