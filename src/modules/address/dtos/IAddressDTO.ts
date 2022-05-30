import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IAddressDTO extends IDefaultDTO {
  uf: string;
  postalCode: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  reference: string;
  userId: number;
}
