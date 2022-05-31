import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IStoreDTO extends IDefaultDTO {
  name: string;

  email: string;

  password?: string;

  delivery: number;

  status: number;
}
