// export class AdditionalRepository implements IAdditionalRepository {
//   private repository: Repository<Category>;

//   constructor() {
//     this.repository = getRepository(Category);
//   }

//   async create(category: ICategoryDTO): Promise<void> {
//     await this.repository.save(category);
//   }

//   async find(): Promise<ICategoryDTO[]> {
//     return this.repository.find();
//   }

//   async findById(id: number): Promise<ICategoryDTO | undefined> {
//     return this.repository.findOne(id);
//   }

//   async findByStore(storeId: number): Promise<ICategoryDTO[]> {
//     return this.repository.find({ storeId });
//   }

//   async update(id: number, data: Partial<ICategoryDTO>): Promise<void> {
//     await this.repository.update(id, data);
//   }

//   async delete(id: number): Promise<void> {
//     await this.repository.delete(id);
//   }
// }
