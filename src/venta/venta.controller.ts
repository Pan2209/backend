import { Controller, Get, Post, Body } from '@nestjs/common';
import { VentaService } from './venta.service';

@Controller('ventas')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  create(@Body() data) {
    return this.ventaService.create(data);
  }

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }
}
