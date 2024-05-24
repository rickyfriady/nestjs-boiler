import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConfig } from './config/database.config';
import { GlobalModule } from './modules/global.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (): TypeOrmModuleOptions => {
        return MysqlConfig;
      },
    }),
    GlobalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
