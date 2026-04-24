import { productsRepositories } from "../database/repositories/ProductsRepositories.ts";
import { Product } from "./../database/entities/Product.ts";

export default class ListProductService {
  async execute(): Promise<Product[]> {
    const products = await productsRepositories.find();

    return products;
  }
}
