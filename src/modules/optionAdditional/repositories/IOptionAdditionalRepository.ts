import { IOptionAdditionalDTO } from '../dtos/IOptionAdditionalDTO';

export interface IOptionAdditionalRepository {
  create(optionAdditional: IOptionAdditionalDTO): Promise<void>;
  find(): Promise<IOptionAdditionalDTO[]>;
  findById(id: number): Promise<IOptionAdditionalDTO | undefined>;
  update(id: number, data: Partial<IOptionAdditionalDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
