import type { Request, Response } from "express";
import ListProductService from "../services/ListProductService.ts";
import ShowProductService from "../services/ShowProductService.ts";
import CreateProductService from "../services/CreateProductService.ts";
import UpdateProductService from "../services/UpdateProductService.ts";
import DeleteProductService from "../services/DeleteProductService.ts";

export default class ProductsControllers {
  async index(req: Request, res: Response): Promise<Response> {
    const listProductService = new ListProductService();
    const products = await listProductService.execute();

    return res.json(products);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProductService = new ShowProductService();
    const product = await showProductService.execute({ id: String(id) });

    return res.json(product);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;

    const createProductService = new CreateProductService();
    const product = await createProductService.execute({ name, price, quantity });

    return res.status(201).json(product);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const updateProductService = new UpdateProductService();
    const product = await updateProductService.execute({ id: String(id), name, price, quantity });

    return res.json(product);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute({ id: String(id) });

    return res.status(204).send([]);
  }
}
