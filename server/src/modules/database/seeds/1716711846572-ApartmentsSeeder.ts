import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { Apartment } from '@modules/apartments';

export class ApartmentsSeeder1716711846572 implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    await dataSource.query('TRUNCATE "apartments" RESTART IDENTITY;');

    const repository = dataSource.getRepository(Apartment);

    await repository.insert([
      {
        id: '1c9e3a1e-b8a2-4d9d-93e2-2e2f8d60e5e3',
        rooms: 3,
        name: 'Sunny Side Apartment',
        price: 1500,
        description: 'A beautiful apartment with a sunny view of the park.',
      },
      {
        id: '2f3d4e2c-5a2e-4e0a-9bca-18f2f9f4e9a1',
        rooms: 2,
        name: 'Cozy Nest',
        price: 1200,
        description: 'A cozy apartment perfect for small families or couples.',
      },
      {
        id: '3a2d5e1f-9d5e-4b1e-8a3b-1e5d9e4e5f6a',
        rooms: 4,
        name: 'Spacious Family Home',
        price: 2000,
        description: 'A spacious apartment ideal for large families.',
      },
      {
        id: '4c1d6f3e-7b3e-4c9d-9e2b-3e7d2e1f9c2a',
        rooms: 1,
        name: 'Modern Studio',
        price: 1000,
        description: 'A modern studio apartment with all amenities included.',
      },
    ]);
  }
}
