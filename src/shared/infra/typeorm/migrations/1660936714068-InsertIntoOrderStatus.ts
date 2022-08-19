import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertIntoOrderStatus1660936714068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO order_status (description) VALUES ("Pedido enviado")'
    );
    await queryRunner.query(
      'INSERT INTO order_status (description) VALUES ("Em preparo")'
    );
    await queryRunner.query(
      'INSERT INTO order_status (description) VALUES ("Saiu para entrega")'
    );
    await queryRunner.query(
      'INSERT INTO order_status (description) VALUES ("Pedido entregue")'
    );
    await queryRunner.query(
      'INSERT INTO order_status (description) VALUES ("Pedido rejeitado")'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DELETE FROM order_status WHERE description IN ("Pedido enviado", "Em preparo", "Saiu para entrega", "Pedido entregue", "Pedido rejeitado")'
    );
  }
}
