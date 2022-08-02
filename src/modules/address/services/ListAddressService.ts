import { inject, injectable } from 'tsyringe';
import { IAddressDTO } from '../dtos/IAddressDTO';
import { IAddressRepository } from '../repositories/IAddressRepository';

@injectable()
export class ListAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async execute(userId: number): Promise<IAddressDTO[]> {
    return this.addressRepository.find(userId);
  }
}
