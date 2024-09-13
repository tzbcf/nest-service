/**
 * FileName : index.controller.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:15:51
 * Description :
 * -----
 * Last Modified: 2024-09-13 18:08:13
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService, User } from './index.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PaginatedResponse } from '@/response.interceptor';

@ApiTags('用户')
@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @ApiOperation({
    summary: '用户列表',
  })
  @Get('list')
  getUserList(): PaginatedResponse<User> {
    return this.appService.getHello();
  }
  @ApiOperation({
    summary: '单个用户',
  })
  @Get(':id')
  getUser(@Param('id') id: string, @Query() query: any): User {
    console.info('a----s---', typeof id, query);
    return this.appService.getItemUser();
  }
}
