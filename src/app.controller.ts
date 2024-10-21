import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  products = [
    "i1",
    "i2",
    "i3"
  ]

  @Get("products")
  getProducts() {
    return this.products
  }
  @Get("products/:id")
  getProduct(@Param('id') id: string) {
    return this.products[Number(id)]
  }
}

