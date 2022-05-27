import { inject, injectable } from 'tsyringe';
import { IOptionAdditionalDTO } from '../dtos/IOptionalAdditionalDTO';
import { IOptionAdditionalRepository } from '../repositories/IOptionAdditionalRepository';

@injectable()
export class CreateOptionAdditionalService {
  constructor(
    @inject('OptionAdditionalRepository')
    private optionAdditionalRepository: IOptionAdditionalRepository
  ) {}

  public async execute(data: IOptionAdditionalDTO): Promise<void> {
    await this.optionAdditionalRepository.create(data);
  }
}
