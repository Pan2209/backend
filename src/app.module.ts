import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClienteModule } from './cliente/cliente.module';
import { VentaModule } from './venta/venta.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [PrismaModule, ClienteModule, VentaModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
