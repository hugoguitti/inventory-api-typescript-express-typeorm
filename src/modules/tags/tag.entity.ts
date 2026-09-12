import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToMany,
} from "typeorm";
import { Product } from "../products/product.entity.js";

@Entity()
@Unique(["name"])
export class Tag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 40 })
  name!: string;

  @ManyToMany(() => Product, (products) => products.tags)
  products!: Product[];
}
