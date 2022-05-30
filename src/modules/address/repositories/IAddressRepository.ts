import { IAddressDTO } from '../dtos/IAddressDTO';

export interface IAddressRepository {
  create(address: IAddressDTO): Promise<void>;
  find(): Promise<IAddressDTO[]>;
  update(id: number, data: Partial<IAddressDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
