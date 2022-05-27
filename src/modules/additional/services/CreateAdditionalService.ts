import { inject, injectable } from 'tsyringe';
import { IAdditionalDTO } from '../dtos/IAdditionalDTO';
import { IAdditionalRepository } from '../repositories/IAdditionalRepository';

@injectable()
export class CreateAdditionalService {
  constructor(
    @inject('AdditionalRepository')
    private additionalRepository: IAdditionalRepository
  ) {}

  public async execute(additional: IAdditionalDTO): Promise<void> {
    await this.additionalRepository.create(additional);
  }
}
