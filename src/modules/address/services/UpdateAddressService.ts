import { inject, injectable } from 'tsyringe';
import { IAddressDTO } from '../dtos/IAddressDTO';
import { IAddressRepository } from '../repositories/IAddressRepository';

@injectable()
export class UpdateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async execute(id: number, data: Partial<IAddressDTO>): Promise<void> {
    await this.addressRepository.update(id, data);
  }
}
