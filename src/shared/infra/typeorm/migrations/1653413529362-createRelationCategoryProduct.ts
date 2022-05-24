import {MigrationInterface, QueryRunner} from "typeorm";

export class createRelationCategoryProduct1653413529362 implements MigrationInterface {
    name = 'createRelationCategoryProduct1653413529362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `UQ_e12875dfb3b1d92d7d7c5377e22` ON `user`");
        await queryRunner.query("ALTER TABLE `product` ADD `categoryId` int NULL");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_ff0c0301a95e517153df97f6812`");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `categoryId`");
        await queryRunner.query("CREATE UNIQUE INDEX `UQ_e12875dfb3b1d92d7d7c5377e22` ON `user` (`email`)");
    }

}
