import express, { type Express, type Request, type Response } from "express";
import productsRoutes from "./modules/products/product.routes.js";

const app: Express = express();

app.use(express.json());

app.use("/products", productsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
