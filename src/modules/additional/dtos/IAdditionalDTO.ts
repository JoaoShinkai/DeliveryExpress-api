import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IAdditionalDTO extends IDefaultDTO {
  name: string;
  multiple: number;
}
