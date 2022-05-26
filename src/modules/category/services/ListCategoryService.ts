import { inject, injectable } from 'tsyringe';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

@injectable()
export class ListCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(): Promise<ICategoryDTO[]> {
    return this.categoryRepository.find();
  }
}
