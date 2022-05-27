import { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelationProductAdditional1653662594668
  implements MigrationInterface
{
  name = 'createRelationProductAdditional1653662594668';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `additional` ADD `productId` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` DROP COLUMN `created_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` DROP COLUMN `updated_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` ADD CONSTRAINT `FK_e45ca43836e7398e527f255864a` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `additional` DROP FOREIGN KEY `FK_e45ca43836e7398e527f255864a`'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` DROP COLUMN `updated_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` DROP COLUMN `created_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `additional` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `additional` DROP COLUMN `productId`');
  }
}
