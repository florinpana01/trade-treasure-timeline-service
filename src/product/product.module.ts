import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from './product.entity';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'Totamealand1983',
    //   database: 'tt-timeline',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    ProductModule
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule { }
