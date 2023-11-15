import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import {ProductService} from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {

    }

    @EventPattern('product_request_all')
    async all() {
        return this.productService.all();
    }

    @EventPattern('product_request_single')
    async getOne(data) {
        const product = await this.productService.get(data.id);
        return product;
    }

    @EventPattern('product_created')
    async create(product) {
        console.log("product_created", product);
        this.productService.create(product);        
    }

    @EventPattern('product_updated')
    async update(product) {
        console.log("product_updated", product);
        this.productService.update(product.id, product);
    }
    @EventPattern('product_deleted')
    async delete(id) {
        console.log("product_deleted", id);        
        this.productService.delete(id);
    }
}
