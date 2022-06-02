import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationUserProduct1654185629870
  implements MigrationInterface
{
  name = 'CreateRelationUserProduct1654185629870';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `FK_073c85ed133e05241040bd70f02` ON `order_product`'
    );
    await queryRunner.query(
      'DROP INDEX `FK_3fb066240db56c9558a91139431` ON `order_product`'
    );
    await queryRunner.query(
      'CREATE TABLE `user_product` (`id` int NOT NULL AUTO_INCREMENT, `quantity` int NOT NULL, `unity_price` decimal(10,2) NOT NULL, `amount` decimal(10,2) NOT NULL, `discount` decimal(10,2) NOT NULL DEFAULT 0, `observation` varchar(255) NULL, `userId` int NOT NULL, `productId` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT 0'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `productId` `productId` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `orderId` `orderId` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `user_product` ADD CONSTRAINT `FK_36f03f7a5c3bd4e909fae121368` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `user_product` ADD CONSTRAINT `FK_81cfc0703bf5a294b16f230a14b` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` ADD CONSTRAINT `FK_073c85ed133e05241040bd70f02` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` ADD CONSTRAINT `FK_3fb066240db56c9558a91139431` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `order_product` DROP FOREIGN KEY `FK_3fb066240db56c9558a91139431`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` DROP FOREIGN KEY `FK_073c85ed133e05241040bd70f02`'
    );
    await queryRunner.query(
      'ALTER TABLE `user_product` DROP FOREIGN KEY `FK_81cfc0703bf5a294b16f230a14b`'
    );
    await queryRunner.query(
      'ALTER TABLE `user_product` DROP FOREIGN KEY `FK_36f03f7a5c3bd4e909fae121368`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `orderId` `orderId` int NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` CHANGE `productId` `productId` int NULL'
    );
    await queryRunner.query(
      "ALTER TABLE `order_product` CHANGE `discount` `discount` decimal(10,2) NOT NULL DEFAULT '0.00'"
    );
    await queryRunner.query('DROP TABLE `user_product`');
    await queryRunner.query(
      'CREATE INDEX `FK_3fb066240db56c9558a91139431` ON `order_product` (`orderId`)'
    );
    await queryRunner.query(
      'CREATE INDEX `FK_073c85ed133e05241040bd70f02` ON `order_product` (`productId`)'
    );
  }
}
