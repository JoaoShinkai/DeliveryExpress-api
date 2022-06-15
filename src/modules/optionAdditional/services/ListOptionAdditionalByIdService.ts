import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IOptionAdditionalDTO } from '../dtos/IOptionAdditionalDTO';
import { IOptionAdditionalRepository } from '../repositories/IOptionAdditionalRepository';

@injectable()
export class ListOptionAdditionalByIdService {
  constructor(
    @inject('OptionAdditionalRepository')
    private optionAdditionalRepository: IOptionAdditionalRepository
  ) {}

  public async execute(id: number): Promise<IOptionAdditionalDTO> {
    const option = await this.optionAdditionalRepository.findById(id);

    if (option === undefined) {
      throw new AppError("This Option Additional doesn't exists");
    }

    return option;
  }
}
