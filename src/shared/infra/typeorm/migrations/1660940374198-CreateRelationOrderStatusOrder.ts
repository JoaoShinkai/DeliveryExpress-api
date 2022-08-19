import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationOrderStatusOrder1660940374198
  implements MigrationInterface
{
  name = 'CreateRelationOrderStatusOrder1660940374198';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `order_status` DROP COLUMN `created_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` DROP COLUMN `updated_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)'
    );
    await queryRunner.query(
      'ALTER TABLE `order` CHANGE `status` `status` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order` ADD CONSTRAINT `FK_7a9573d6a1fb982772a91233205` FOREIGN KEY (`status`) REFERENCES `order_status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `order` DROP FOREIGN KEY `FK_7a9573d6a1fb982772a91233205`'
    );
    await queryRunner.query(
      "ALTER TABLE `order` CHANGE `status` `status` int NOT NULL DEFAULT '1'"
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` DROP COLUMN `updated_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` DROP COLUMN `created_at`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_status` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP'
    );
  }
}
