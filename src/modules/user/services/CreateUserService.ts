import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(user: IUserDTO): Promise<void> {
    const emailAlreadyExists = await this.userRepository.findByEmail(
      user.email
    );

    if (emailAlreadyExists) {
      throw new AppError('Email already exists');
    }

    const newUser = user;
    newUser.password = await this.userRepository.hashPassword(user.password);

    await this.userRepository.create(newUser);
  }
}
