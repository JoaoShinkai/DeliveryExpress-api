import { inject, injectable } from 'tsyringe';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

@injectable()
export class ListCategoryByStoreService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(id: number): Promise<ICategoryDTO[]> {
    return this.categoryRepository.findByStore(id);
  }
}
