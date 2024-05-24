import { Global, Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Global()
@Module({
  imports: [
    //Global Module list
    ItemsModule,
  ],
})
export class GlobalModule {}
