/**
 * FileName : index.service.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:17:51
 * Description :
 * -----
 * Last Modified: 2024-09-13 18:07:16
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import { Injectable } from '@nestjs/common';
import { PaginatedResponse } from '@/response.interceptor';

export type User = {
  name: string;
  id: number;
};

@Injectable()
export class UserService {
  getHello(): PaginatedResponse<User> {
    return {
      page: 1,
      size: 10,
      total: 2,
      data: [
        {
          id: 1,
          name: '1',
        },
        {
          id: 2,
          name: '2',
        },
      ],
    };
  }
  getItemUser(): User {
    return {
      id: 1,
      name: '1',
    };
  }
}
