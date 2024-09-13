/**
 * FileName : response.interceptor.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-13 16:55:00
 * Description :
 * -----
 * Last Modified: 2024-09-13 18:07:01
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type PaginatedResponse<T> = {
  page: number;
  size: number;
  total: number;
  data: T[];
};

interface Response<T> {
  code: number;
  message: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res) => {
        console.info('1----', res);
        // 处理单个对象响应
        return {
          code: 200,
          message: 'Success',
          data: res,
        } as Response<T>;
      }),
    );
  }
}
