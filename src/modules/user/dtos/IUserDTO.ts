import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IUserDTO extends IDefaultDTO {
  name: string;

  email: string;

  birthDate: Date;

  phone: string;

  password: string;
}
