import { IAddressDTO } from '@modules/address/dtos/IAddressDTO';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { getRepository, Repository } from 'typeorm';
import { Address } from '../entities/Address';

export class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create(address: IAddressDTO): Promise<void> {
    await this.repository.save(address);
  }

  async find(): Promise<IAddressDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: Partial<IAddressDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}