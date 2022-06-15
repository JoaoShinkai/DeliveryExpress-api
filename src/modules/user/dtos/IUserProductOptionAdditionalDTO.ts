import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IUserProductOptionAdditionalDTO extends IDefaultDTO {
  name: string;
  price: number;
  userProductId: number;
}
