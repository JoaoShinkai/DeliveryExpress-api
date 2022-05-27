import { IAdditionalDTO } from '@modules/additional/dtos/IAdditionalDTO';
import { IAdditionalRepository } from '@modules/additional/repositories/IAdditionalRepository';
import { getRepository, Repository } from 'typeorm';
import { Additional } from '../entities/Additional';

export class AdditionalRepository implements IAdditionalRepository {
  private repository: Repository<Additional>;

  constructor() {
    this.repository = getRepository(Additional);
  }

  async create(additional: IAdditionalDTO): Promise<void> {
    await this.repository.save(additional);
  }

  async find(): Promise<IAdditionalDTO[]> {
    return this.repository.find();
  }

  async findByProduct(productId: number): Promise<IAdditionalDTO[]> {
    return this.repository.find({ productId });
  }

  async update(id: number, data: Partial<IAdditionalDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
