import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'apartments' })
export class Apartment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rooms: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;
}
