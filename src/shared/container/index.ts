import { AdditionalRepository } from '@modules/additional/infra/typeorm/repositories/AdditionalRepository';
import { IAdditionalRepository } from '@modules/additional/repositories/IAdditionalRepository';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { OptionAdditionalRepository } from '@modules/optionAdditional/infra/typeorm/repositories/OptionAdditionalRepository';
import { IOptionAdditionalRepository } from '@modules/optionAdditional/repositories/IOptionAdditionalRepository';
import { ProductRepository } from '@modules/product/infra/typeorm/repositories/ProductRepository';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { StoreRepository } from '@modules/store/infra/typeorm/repositories/StoreRepository';
import { IStoreRepository } from '@modules/store/repositories/IStoreRepository';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IStoreRepository>(
  'StoreRepository',
  StoreRepository
);
container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
);
container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);
container.registerSingleton<IAdditionalRepository>(
  'AdditionalRepository',
  AdditionalRepository
);
container.registerSingleton<IOptionAdditionalRepository>(
  'OptionAdditionalRepository',
  OptionAdditionalRepository
);
