import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ClienteCreateInput) {
    return this.prisma.cliente.create({ data });
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.ClienteUpdateInput) {
    return this.prisma.cliente.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.cliente.delete({ where: { id } });
  }
}