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
        const like = await this.likeService.get(data.id);
        return like;
    }

    @EventPattern('like_created')
    async create(like) {
        console.log("like_created", like);
        this.likeService.create(like);        
    }

    @EventPattern('like_updated')
    async update(like) {
        console.log("like_updated", like);
        this.likeService.update(like.id, like)
    }
    @EventPattern('like_deleted')
    async delete(id) {
        console.log("like_deleted", id);        
        this.likeService.delete(id);
    }
}
