import { inject, injectable } from 'tsyringe';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

@injectable()
export class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(category: ICategoryDTO): Promise<void> {
    await this.categoryRepository.create(category);
  }
}
