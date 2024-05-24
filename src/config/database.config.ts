import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

console.log('====================================');
console.log('db host : ', process.env.MYSQL_HOST);
console.log('db port : ', process.env.MYSQL_PORT);
console.log('db usname : ', process.env.MYSQL_USERNAME);
console.log('db pass : ', process.env.MYSQL_PASSWORD);
console.log('db name : ', process.env.MYSQL_DATABASE);
console.log('====================================');

const MysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: String(process.env.MYSQL_USERNAME),
  password: String(process.env.MYSQL_PASSWORD),
  database: String(process.env.MYSQL_DATABASE),
  autoLoadEntities: true,
  synchronize: true,
  entities: ['./dist' + '**/*.entity{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
};

export { MysqlConfig };
