/**
 * FileName : index.controller.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:15:51
 * Description :
 * -----
 * Last Modified: 2024-09-12 16:53:37
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import { Controller, Get } from '@nestjs/common';
import { UserService } from './index.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('用户')
@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @ApiOperation({
    summary: '用户列表',
  })
  @Get('list')
  getUserList(): string {
    return this.appService.getHello();
  }
}
