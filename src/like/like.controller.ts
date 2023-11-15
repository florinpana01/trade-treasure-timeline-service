import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LikeService } from './like.service';

@Controller('likes')
export class LikeController {
    constructor(private likeService: LikeService) {

    }

    @EventPattern('like_request_all')
    async all() {
        return this.likeService.all();
    }

    @EventPattern('like_request_single')
    async getOne(data) {
        const product = await this.likeService.get(data.id);
        return product;
    }

    @EventPattern('like_created')
    async create(product) {
        console.log("like_created", product);
        this.likeService.create(product);        
    }

    @EventPattern('like_updated')
    async update(product) {
        console.log("like_updated", product);
        this.likeService.update(product.id, product)
    }
    @EventPattern('like_deleted')
    async delete(id) {
        console.log("product_deleted", id);        
        this.likeService.delete(id);
    }
}
