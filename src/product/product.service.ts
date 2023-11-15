import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Product} from './product.entity';
import {Repository} from 'typeorm';

@Injectable()
export class ProductService {
    // the connection to the database
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){  
    }
    async all(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async create(data): Promise<Product>{
        console.log("product created data", data);

        return this.productRepository.save(data);
    }

    async get(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({
            where: {id},
        });
        return product;
    }

    async update(id: number, data): Promise<any>{
        const product = await this.productRepository.findOne({
            where: {id}, 
        });
        console.log("updated product", product);
        
        return this.productRepository.update(product.service_id, data);
    }
    
    async delete(id: number): Promise<any> {
        const product = await this.productRepository.findOne({
            where: {id}, 
        });
        return this.productRepository.delete(product.service_id);
    }
    }
