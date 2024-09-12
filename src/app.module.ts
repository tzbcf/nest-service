import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import ModuleConfig from '@/config/index.module';
import { UserModule } from '@/api/organization/user/index.module';

@Module({
  imports: [UserModule, RouterModule.register(ModuleConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
