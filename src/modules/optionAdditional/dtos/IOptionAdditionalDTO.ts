import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IOptionAdditionalDTO extends IDefaultDTO {
  name: string;
  price: number;
  available: number;
}
