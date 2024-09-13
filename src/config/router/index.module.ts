/**
 * FileName : index.module.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-12 16:25:31
 * Description :
 * -----
 * Last Modified: 2024-09-13 16:42:19
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */
import { Type } from '@nestjs/common';
import { Routes } from '@nestjs/core';
import OrganizationModule from '@/config/router/organization/index.module';

const routerList = [OrganizationModule];

const moduleList: Type<any>[] = [];

const queryRouterModule = (routes: Routes) => {
  routes.forEach((v) => {
    if (v.module) {
      moduleList.push(v.module);
    }
    if (v.children?.length) {
      queryRouterModule(v.children as Routes);
    }
  });
};

queryRouterModule(routerList);

export { moduleList };

export default routerList;
