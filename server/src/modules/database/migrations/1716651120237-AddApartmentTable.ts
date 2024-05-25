import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddApartmentTable1716651120237 implements MigrationInterface {
  name = 'AddApartmentTable1716651120237';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "apartments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rooms" integer NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_f6058e85d6d715dbe22b72fe722" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "apartments"`);
  }
}
