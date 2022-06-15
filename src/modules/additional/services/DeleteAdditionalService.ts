import { inject, injectable } from 'tsyringe';
import { IAdditionalRepository } from '../repositories/IAdditionalRepository';

@injectable()
export class DeleteAdditionalService {
  constructor(
    @inject('AdditionalRepository')
    private additionalRepository: IAdditionalRepository
  ) {}

  public async execute(id: number): Promise<void> {
    await this.additionalRepository.delete(id);
  }
}
