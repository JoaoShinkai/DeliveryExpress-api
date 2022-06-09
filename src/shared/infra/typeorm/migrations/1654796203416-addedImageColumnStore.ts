import { MigrationInterface, QueryRunner } from 'typeorm';

export class addedImageColumnStore1654796203416 implements MigrationInterface {
  name = 'addedImageColumnStore1654796203416';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `store` ADD `image` varchar(255) NOT NULL DEFAULT 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'"
    );
    await queryRunner.query(
      'ALTER TABLE `user_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
    await queryRunner.query(
      "ALTER TABLE `user_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
    await queryRunner.query('ALTER TABLE `store` DROP COLUMN `image`');
  }
}
