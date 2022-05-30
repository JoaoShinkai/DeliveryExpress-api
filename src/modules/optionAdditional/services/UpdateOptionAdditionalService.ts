import { inject, injectable } from 'tsyringe';
import { IOptionAdditionalDTO } from '../dtos/IOptionAdditionalDTO';
import { IOptionAdditionalRepository } from '../repositories/IOptionAdditionalRepository';

@injectable()
export class UpdateOptionAdditionalService {
  constructor(
    @inject('OptionAdditionalRepository')
    private optionAdditionalRepository: IOptionAdditionalRepository
  ) {}

  public async execute(
    id: number,
    data: Partial<IOptionAdditionalDTO>
  ): Promise<void> {
    await this.optionAdditionalRepository.update(id, data);
  }
}
