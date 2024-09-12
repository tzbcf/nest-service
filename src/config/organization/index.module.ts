/**
 * FileName : index.module.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:20:24
 * Description :
 * -----
 * Last Modified: 2024-09-12 16:52:16
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import { UserModule } from '@/api/organization/user/index.module';
// import { OrganizationModule } from '../../api/organization/index.module';

export default {
  path: 'organization',
  children: [
    {
      path: 'user',
      module: UserModule,
    },
  ],
};
