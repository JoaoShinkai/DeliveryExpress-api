import { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelationAdditionalOptionAdditional1653674690147
  implements MigrationInterface
{
  name = 'createRelationAdditionalOptionAdditional1653674690147';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `optionadditional` ADD `additionalId` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` DROP COLUMN `created_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` DROP COLUMN `updated_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` ADD CONSTRAINT `FK_d3551cc43671bcd9eefa8a44a78` FOREIGN KEY (`additionalId`) REFERENCES `additional`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `optionadditional` DROP FOREIGN KEY `FK_d3551cc43671bcd9eefa8a44a78`'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` DROP COLUMN `updated_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` DROP COLUMN `created_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query(
      'ALTER TABLE `optionadditional` DROP COLUMN `additionalId`'
    );
  }
}
