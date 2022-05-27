import { inject, injectable } from 'tsyringe';
import { IOptionAdditionalDTO } from '../dtos/IOptionalAdditionalDTO';
import { IOptionAdditionalRepository } from '../repositories/IOptionAdditionalRepository';

@injectable()
export class ListOptionAdditionalService {
  constructor(
    @inject('OptionAdditionalRepository')
    private optionAdditionalRepository: IOptionAdditionalRepository
  ) {}

  public async execute(): Promise<IOptionAdditionalDTO[]> {
    return this.optionAdditionalRepository.find();
  }
}
