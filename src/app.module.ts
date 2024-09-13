import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import ModuleConfig, { moduleList } from '@/config/router/index.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import mysqlConfig from '@/config/mysql';
@Module({
  imports: [
    ...moduleList,
    RouterModule.register(ModuleConfig),
    TypeOrmModule.forRoot({
      ...mysqlConfig,
      // entities: ['src/**/*.entity{.ts,.js}'], // 自动注册所有实体
      synchronize: process.env.NODE_ENV === 'dev', // 自动创建表
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
