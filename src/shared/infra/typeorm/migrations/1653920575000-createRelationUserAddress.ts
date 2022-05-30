import { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelationUserAddress1653920575000
  implements MigrationInterface
{
  name = 'createRelationUserAddress1653920575000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `address` ADD `userId` int NOT NULL');
    await queryRunner.query('ALTER TABLE `address` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `address` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query('ALTER TABLE `address` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `address` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `address` ADD CONSTRAINT `FK_d25f1ea79e282cc8a42bd616aa3` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `address` DROP FOREIGN KEY `FK_d25f1ea79e282cc8a42bd616aa3`'
    );
    await queryRunner.query('ALTER TABLE `address` DROP COLUMN `updated_at`');
    await queryRunner.query(
      'ALTER TABLE `address` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `address` DROP COLUMN `created_at`');
    await queryRunner.query(
      'ALTER TABLE `address` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query('ALTER TABLE `address` DROP COLUMN `userId`');
  }
}
