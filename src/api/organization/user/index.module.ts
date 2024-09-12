/**
 * FileName : index.module.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:18:21
 * Description :
 * -----
 * Last Modified: 2024-09-12 16:19:41
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import { Module } from '@nestjs/common';
import { UserController } from './index.controller';
import { UserService } from './index.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
