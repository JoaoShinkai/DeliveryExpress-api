import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationOrderProductOptionAdditional1659709894179
  implements MigrationInterface
{
  name = 'CreateRelationOrderProductOptionAdditional1659709894179';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `orderproduct_optionadditional` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` decimal(10,2) NOT NULL, `optionAdditionalId` int NOT NULL, `orderProductId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `userproduct_optionadditional` CHANGE `price` `price` decimal(10,2) NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `orderproduct_optionadditional` ADD CONSTRAINT `FK_0db15f778f81decec3fb0393ff7` FOREIGN KEY (`optionAdditionalId`) REFERENCES `optionadditional`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `orderproduct_optionadditional` ADD CONSTRAINT `FK_b91639cc38ba5df12abba97fbc6` FOREIGN KEY (`orderProductId`) REFERENCES `order_product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `orderproduct_optionadditional` DROP FOREIGN KEY `FK_b91639cc38ba5df12abba97fbc6`'
    );
    await queryRunner.query(
      'ALTER TABLE `orderproduct_optionadditional` DROP FOREIGN KEY `FK_0db15f778f81decec3fb0393ff7`'
    );
    await queryRunner.query(
      'ALTER TABLE `userproduct_optionadditional` CHANGE `price` `price` decimal(10,2) NULL'
    );
    await queryRunner.query('DROP TABLE `orderproduct_optionadditional`');
  }
}
