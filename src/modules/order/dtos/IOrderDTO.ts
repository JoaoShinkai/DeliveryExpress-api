import { IOrderStatusDTO } from '@modules/orderStatus/dtos/IOrderStatusDTO';
import { IStoreDTO } from '@modules/store/dtos/IStoreDTO';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IOrderProductDTO } from './IOrderProductDTO';

export interface IOrderDTO extends IDefaultDTO {
  userId: number;
  storeId: number;
  status: IOrderStatusDTO;
  date: string;
  sent: Date;
  viewed: Date;
  conclusion: Date;
  paymentMethod: number;
  changeMoney: number;
  amount: number;
  delivery: number;
  accepted: number;
  uf: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  reference: string;
  user?: Partial<IUserDTO>;
  store?: Partial<IStoreDTO>;
  products: IOrderProductDTO[];
}
