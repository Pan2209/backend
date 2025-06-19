import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductoService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ProductoCreateInput) {
    return this.prisma.producto.create({ data });
  }

  findAll() {
    return this.prisma.producto.findMany();
  }

  findOne(id: number) {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.ProductoUpdateInput) {
    return this.prisma.producto.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.producto.delete({ where: { id } });
  }
}
