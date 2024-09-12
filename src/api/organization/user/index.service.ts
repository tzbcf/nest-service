/**
 * FileName : index.service.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:17:51
 * Description :
 * -----
 * Last Modified: 2024-09-12 16:18:45
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }
}
