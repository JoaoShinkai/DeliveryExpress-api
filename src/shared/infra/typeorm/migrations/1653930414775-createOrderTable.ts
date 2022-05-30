import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrderTable1653930414775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'status',
            type: 'int',
            isNullable: false,
            default: 1
          },
          {
            name: 'date',
            type: 'date',
            isNullable: false,
            default: '(CURRENT_DATE())'
          },
          {
            name: 'sent',
            type: 'datetime(6)',
            isNullable: false,
            default: 'current_timestamp(6)'
          },
          {
            name: 'viewed',
            type: 'datetime(6)',
            isNullable: true
          },
          {
            name: 'conclusion',
            type: 'datetime(6)',
            isNullable: true
          },
          {
            name: 'payment_method',
            type: 'int',
            isNullable: false
          },
          {
            name: 'change_money',
            type: 'decimal(10,2)',
            isNullable: true
          },
          {
            name: 'amount',
            type: 'decimal(10,2)',
            isNullable: false
          },
          {
            name: 'delivery',
            type: 'decimal(10,2)',
            isNullable: true
          },
          {
            name: 'accepted',
            type: 'int',
            isNullable: false,
            default: 0
          },
          {
            name: 'uf',
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
            type: 'datetime',
            default: 'current_timestamp()'
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'current_timestamp()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order');
  }
}
