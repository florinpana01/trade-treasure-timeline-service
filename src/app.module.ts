import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { LikeController } from './like/like.controller';
import { LikeModule } from './like/like.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Product} from './product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      //host: '35.233.2.49',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Totamealand1983',
      //database: 'tradetreasure-timeline',
      database: 'tt-timeline',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
