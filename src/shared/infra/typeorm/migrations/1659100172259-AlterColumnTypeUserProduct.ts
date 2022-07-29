import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterColumnTypeUserProduct1659100172259
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE userproduct_optionadditional MODIFY COLUMN price decimal(10,2)'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE userproduct_optionadditional MODIFY COLUMN price int'
    );
  }
}
