import { MigrationInterface, QueryRunner } from 'typeorm';

export class createRelationOrderProducts1654024862913
  implements MigrationInterface
{
  name = 'createRelationOrderProducts1654024862913';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `order_product` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `quantity` int NOT NULL, `unity_price` decimal(10,2) NOT NULL, `amount` decimal(10,2) NOT NULL, `discount` decimal(10,2) NOT NULL DEFAULT 0, `observation` varchar(255) NULL, `productId` int NOT NULL, `orderId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` ADD CONSTRAINT `FK_073c85ed133e05241040bd70f02` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` ADD CONSTRAINT `FK_3fb066240db56c9558a91139431` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `order_product` DROP FOREIGN KEY `FK_3fb066240db56c9558a91139431`'
    );
    await queryRunner.query(
      'ALTER TABLE `order_product` DROP FOREIGN KEY `FK_073c85ed133e05241040bd70f02`'
    );
    await queryRunner.query('DROP TABLE `order_product`');
  }
}
