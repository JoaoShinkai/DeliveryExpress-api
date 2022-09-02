import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

@injectable()
export class DeleteCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(store: number, id: number): Promise<void> {
    return this.categoryRepository.delete(store, id);
  }
}
