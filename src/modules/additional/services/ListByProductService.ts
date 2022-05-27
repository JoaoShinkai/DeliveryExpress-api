import { inject, injectable } from 'tsyringe';
import { IAdditionalDTO } from '../dtos/IAdditionalDTO';
import { IAdditionalRepository } from '../repositories/IAdditionalRepository';

@injectable()
export class ListByProductService {
  constructor(
    @inject('AdditionalRepository')
    private additionalRepository: IAdditionalRepository
  ) {}

  public async execute(productId: number): Promise<IAdditionalDTO[]> {
    return this.additionalRepository.findByProduct(productId);
  }
}
