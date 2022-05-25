import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateUniqueFields1653489392832 implements MigrationInterface {
  name = 'updateUniqueFields1653489392832';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`'
    );
    await queryRunner.query(
      'ALTER TABLE `product` CHANGE `categoryId` `categoryId` int NOT NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `store` ADD UNIQUE INDEX `IDX_edfd1cc801464d89c565d84c20` (`email`)'
    );
    await queryRunner.query(
      'ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)'
    );
    await queryRunner.query(
      'ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`'
    );
    await queryRunner.query(
      'ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`'
    );
    await queryRunner.query(
      'ALTER TABLE `store` DROP INDEX `IDX_edfd1cc801464d89c565d84c20`'
    );
    await queryRunner.query(
      'ALTER TABLE `product` CHANGE `categoryId` `categoryId` int NULL'
    );
    await queryRunner.query(
      'ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }
}
