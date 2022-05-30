import { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelationUserOrderStore1653938277550
  implements MigrationInterface
{
  name = 'createRelationUserOrderStore1653938277550';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `order` ADD `userId` int NOT NULL');
    await queryRunner.query('ALTER TABLE `order` ADD `storeId` int NOT NULL');
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `sent` `sent` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `viewed` `viewed` datetime NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `conclusion` `conclusion` datetime NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order` ADD CONSTRAINT `FK_1a79b2f719ecd9f307d62b81093` FOREIGN KEY (`storeId`) REFERENCES `store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `order` ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `order` DROP FOREIGN KEY `FK_caabe91507b3379c7ba73637b84`'
    );
    await queryRunner.query(
      'ALTER TABLE `order` DROP FOREIGN KEY `FK_1a79b2f719ecd9f307d62b81093`'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `conclusion` `conclusion` datetime(6) NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `viewed` `viewed` datetime(6) NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `sent` `sent` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `order` DROP COLUMN `storeId`');
    await queryRunner.query('ALTER TABLE `order` DROP COLUMN `userId`');
  }
}
