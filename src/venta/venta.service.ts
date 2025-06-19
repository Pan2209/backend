import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VentaService {
  constructor(private prisma: PrismaService) {}

  async create(data: { clienteId?: number; observacion?: string; productos: { productoId: number; cantidad: number; precio: number }[] }) {
    return this.prisma.venta.create({
      data: {
        clienteId: data.clienteId,
        observacion: data.observacion,
        productos: {
          create: data.productos.map(p => ({
            cantidad: p.cantidad,
            precio: p.precio,
            producto: { connect: { id: p.productoId } }
          }))
        }
      },
      include: { productos: true }
    });
  }

  findAll() {
    return this.prisma.venta.findMany({
      include: {
        cliente: true,
        productos: {
          include: {
            producto: true
          }
        }
      }
    });
  }
}
