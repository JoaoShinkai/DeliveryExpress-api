import { IOptionAdditionalDTO } from '../dtos/IOptionalAdditionalDTO';

export interface IOptionAdditionalRepository {
  create(optionAdditional: IOptionAdditionalDTO): Promise<void>;
  find(): Promise<IOptionAdditionalDTO[]>;
  update(id: number, data: Partial<IOptionAdditionalDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
