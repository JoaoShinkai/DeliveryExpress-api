import { IOptionAdditionalDTO } from '@modules/optionAdditional/dtos/IOptionAdditionalDTO';
import { IOptionAdditionalRepository } from '@modules/optionAdditional/repositories/IOptionAdditionalRepository';
import { getRepository, Repository } from 'typeorm';
import { OptionAdditional } from '../entities/OptionAdditional';

export class OptionAdditionalRepository implements IOptionAdditionalRepository {
  private repository: Repository<OptionAdditional>;

  constructor() {
    this.repository = getRepository(OptionAdditional);
  }

  async create(optionAdditional: IOptionAdditionalDTO): Promise<void> {
    await this.repository.save(optionAdditional);
  }

  async find(): Promise<IOptionAdditionalDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IOptionAdditionalDTO | undefined> {
    return this.repository.findOne(id);
  }

  async update(id: number, data: Partial<IOptionAdditionalDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
