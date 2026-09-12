import { DataSource } from "typeorm";
import { Category } from "../modules/categories/category.entity.js";
import { ProductDetails } from "../modules/productDetails/productDetail.entity.js";
import { Product } from "../modules/products/product.entity.js";
import { Tag } from "../modules/tags/tag.entity.js";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "data/inventory.sqlite",

  //synchronize avoid migrations (not good for production env)
  synchronize: true,
  logging: true,

  entities: [Product, Category, ProductDetails, Tag],

  subscribers: [],
  migrations: [],
});
