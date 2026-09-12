import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ProductStatus } from "./product.status.js";

@Entity()
@Unique(["sku"])
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 120 })
  name!: string;

  @Column({ length: 64 })
  sku!: string;

  @Column()
  priceInCents!: number;

  @Column()
  stock!: number;

  @Column()
  status!: ProductStatus;

  @Column()
  featured!: boolean;

  @Column("double")
  rating?: number;

  @Column()
  metadata?: Record<string, string | number | boolean>;

  // TODO relations
  // @Column()
  // category!: boolean

  // @Column()
  // detail!: boolean

  // @Column()
  // tags!: boolean
}
