import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Product } from "../products/product.entity.js";

@Entity()
export class ProductDetails {
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

  @OneToOne(() => Product, (product) => product.detail)
  product!: Product;
}
