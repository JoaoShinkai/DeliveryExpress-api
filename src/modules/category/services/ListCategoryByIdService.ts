import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

@injectable()
export class ListCategoryByIdService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(id: number): Promise<ICategoryDTO> {
    const category = await this.categoryRepository.findById(id);

    if (category === undefined) {
      throw new AppError("This category doesn't exists");
    }

    return category;
  }
}
