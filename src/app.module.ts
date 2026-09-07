import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { SolutionsModule } from './solutions/solutions.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ServicesModule, SolutionsModule, SubscriptionsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
