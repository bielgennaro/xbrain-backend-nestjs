import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellersModule } from './sellers/sellers.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [SellersModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
