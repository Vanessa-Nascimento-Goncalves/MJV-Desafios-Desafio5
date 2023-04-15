import { Product } from '../models/product.model';
import ProductRepository from '../repositories/product.repository';

class ProductsService {

    getAll() {
      return ProductRepository.getAll();
    }

    getByID(id: number) {
        return ProductRepository.getById(id);
    }

    create(product: typeof Product) {
        return ProductRepository.create(product);
    }

    remove(id: number) {
      return ProductRepository.remove(id);
        
       
      /*const productIndex = this.products.findIndex((product) => product.id === id);

        if (productIndex === -1){
            throw new Error("Produto não encontrado!");
        }
        this.products.splice(productIndex, 1);*/
    }

    update(id: number, product: Partial<typeof Product>) {
        return ProductRepository.update(id, product);
      
      /*const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1){
            throw new Error("Produto não encontrado!");
        }
        this.products [productIndex] = product;*/
    }
}

export default new ProductsService();