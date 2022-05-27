import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOptionAdditionalTable1653670841827
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'optionAdditional',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'price',
            type: 'decimal(10,2)',
            isNullable: false
          },
          {
            name: 'available',
            type: 'int',
            isNullable: false,
            default: 1
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('optionAdditional');
  }
}
