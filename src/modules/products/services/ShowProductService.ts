import type { Product } from "../database/entities/Product.ts";
import { productsRepositories } from "../database/repositories/ProductsRepositories.ts";
import AppError from "@shared/errors/AppError.ts";

interface IShowProduct {
  id: string;
}

export default class showProductService {
  async execute({ id }: IShowProduct): Promise<Product> {
    const product = await productsRepositories.findById(id)

    if(!product) {
      throw new AppError("Product not found", 404)
    }

    return product;
  }
}
