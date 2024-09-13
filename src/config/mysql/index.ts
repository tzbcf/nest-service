/**
 * FileName : index.ts
 * ProjectName : test
 * Author : <<author>>
 * Created Date: 2024-09-13 11:11:22
 * Description :
 * -----
 * Last Modified: 2024-09-13 13:30:09
 * Modified By :
 * -----
 * Copyright (c) <<year>> <<company>>. All rights reserved.
 */

export default {
  type: (process.env.DB_TYPE || 'mysql') as 'mysql', // 数据库类型
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT, // 转换为数字
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
