import { inject, injectable } from 'tsyringe';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

@injectable()
export class UpdateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(id: number, data: Partial<ICategoryDTO>): Promise<void> {
    await this.categoryRepository.update(id, data);
  }
}
