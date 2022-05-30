import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createAddressTable1653917871421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'postal_code',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'street',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'reference',
            type: 'varchar',
            isNullable: true
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
    await queryRunner.dropTable('address');
  }
}
