import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 2000 })
  description!: string;

  @Column()
  marketingDescriptionHtml?: string;

  @Column({ length: 120 })
  manufacturer?: string;

  @Column("double")
  weightKg?: number;

  @Column()
  warrantyMonths?: number;

  // TODO relations
  // @Column()
  // product!: boolean
}
