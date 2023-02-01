import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PrismaModule, PrismaModule, ProductsModule],
  providers: [],
})
export class AppModule {}
