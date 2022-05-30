import { AdditionalRepository } from '@modules/additional/infra/typeorm/repositories/AdditionalRepository';
import { IAdditionalRepository } from '@modules/additional/repositories/IAdditionalRepository';
import { AddressRepository } from '@modules/address/infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { OptionAdditionalRepository } from '@modules/optionAdditional/infra/typeorm/repositories/OptionAdditionalRepository';
import { IOptionAdditionalRepository } from '@modules/optionAdditional/repositories/IOptionAdditionalRepository';
import { OrderRepository } from '@modules/order/infra/typeorm/repositories/OrderRepository';
import { IOrderRepository } from '@modules/order/repositories/IOrderRepository';
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
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
);
container.registerSingleton<IOrderRepository>(
  'OrderRepository',
  OrderRepository
);
