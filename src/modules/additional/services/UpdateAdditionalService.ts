import { inject, injectable } from 'tsyringe';
import { IAdditionalDTO } from '../dtos/IAdditionalDTO';
import { IAdditionalRepository } from '../repositories/IAdditionalRepository';

@injectable()
export class UpdateAdditionalService {
  constructor(
    @inject('AdditionalRepository')
    private addtionalRepository: IAdditionalRepository
  ) {}

  public async execute(
    id: number,
    data: Partial<IAdditionalDTO>
  ): Promise<void> {
    await this.addtionalRepository.update(id, data);
  }
}
