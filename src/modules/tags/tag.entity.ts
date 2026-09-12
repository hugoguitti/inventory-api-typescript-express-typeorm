import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 40 })
  name!: string;

  // TODO relations
  // @Column()
  // product!: boolean
}
