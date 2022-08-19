import { IOptionAdditionalDTO } from '@modules/optionAdditional/dtos/IOptionAdditionalDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IOrderProductDTO } from './IOrderProductDTO';

export interface IOrderProductOptionAdditionalDTO extends IDefaultDTO {
  name: string;
  price: number;
  orderProduct: IOrderProductDTO;
  optionAdditional: IOptionAdditionalDTO;
}
