import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
} from "typeorm";
import { Product } from "../products/product.entity.js";

@Entity()
@Unique(["name"])
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ length: 80 })
  description?: string;

  @OneToMany(() => Product, (product) => product.category)
  products!: Product[];
}
