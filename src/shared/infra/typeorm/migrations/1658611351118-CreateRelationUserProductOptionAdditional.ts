import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationUserProductOptionAdditional1658611351118
  implements MigrationInterface
{
  name = 'CreateRelationUserProductOptionAdditional1658611351118';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `userproduct_optionadditional` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` int NOT NULL, `optionAdditionalId` int NULL, `userProductId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `user_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
    await queryRunner.query(
      'ALTER TABLE `userproduct_optionadditional` ADD CONSTRAINT `FK_63c6032cf6a5e64a05d5ed91040` FOREIGN KEY (`optionAdditionalId`) REFERENCES `optionadditional`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `userproduct_optionadditional` ADD CONSTRAINT `FK_4b025c096f1fa5f73f22a4476bf` FOREIGN KEY (`userProductId`) REFERENCES `user_product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `userproduct_optionadditional` DROP FOREIGN KEY `FK_4b025c096f1fa5f73f22a4476bf`'
    );
    await queryRunner.query(
      'ALTER TABLE `userproduct_optionadditional` DROP FOREIGN KEY `FK_63c6032cf6a5e64a05d5ed91040`'
    );
    await queryRunner.query(
      "ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
    await queryRunner.query(
      "ALTER TABLE `user_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
    await queryRunner.query('DROP TABLE `userproduct_optionadditional`');
  }
}
