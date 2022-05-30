import { inject, injectable } from 'tsyringe';
import { IAddressDTO } from '../dtos/IAddressDTO';
import { IAddressRepository } from '../repositories/IAddressRepository';

@injectable()
export class CreateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async execute(address: IAddressDTO): Promise<void> {
    await this.addressRepository.create(address);
  }
}
