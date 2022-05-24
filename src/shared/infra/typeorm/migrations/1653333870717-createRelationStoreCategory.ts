import { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelationStoreCategory1653333870717
  implements MigrationInterface
{
  name = 'createRelationStoreCategory1653333870717';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `category` ADD `storeId` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `user` ADD `birth_date` datetime NOT NULL'
    );
    await queryRunner.query('ALTER TABLE `store` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `store` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query('ALTER TABLE `store` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `store` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query('ALTER TABLE `category` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `category` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query('ALTER TABLE `category` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `category` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `user` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `user` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `category` ADD CONSTRAINT `FK_52d64a21bc11cd2b4bbabcc5d4b` FOREIGN KEY (`storeId`) REFERENCES `store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `category` DROP FOREIGN KEY `FK_52d64a21bc11cd2b4bbabcc5d4b`'
    );
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `user` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `user` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `category` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `category` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `category` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `category` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `store` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `store` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `store` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `store` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `birth_date`');
    await queryRunner.query('ALTER TABLE `category` DROP COLUMN `storeId`');
  }
}
