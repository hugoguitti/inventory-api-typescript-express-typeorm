import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  OneToOne,
  ManyToMany,
} from "typeorm";
import { ProductStatus } from "./product.status.js";
import { Category } from "../categories/category.entity.js";
import { ProductDetails } from "../productDetails/productDetail.entity.js";
import { Tag } from "../tags/tag.entity.js";

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

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;

  @OneToOne(() => ProductDetails, (details) => details.product)
  detail!: ProductDetails;

  @ManyToMany(() => Tag, (tags) => tags.products)
  tags!: Tag[];
}
