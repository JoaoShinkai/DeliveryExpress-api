import { MigrationInterface, QueryRunner } from 'typeorm';

export class updatingNullableFieldInProductTable1655214181018
  implements MigrationInterface
{
  name = 'updatingNullableFieldInProductTable1655214181018';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
    await queryRunner.query(
      'ALTER TABLE `product` CHANGE `description` `description` varchar(255) NULL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `product` CHANGE `description` `description` varchar(255) NOT NULL'
    );
    await queryRunner.query(
      "ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
    await queryRunner.query(
      "ALTER TABLE `user_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
  }
}
