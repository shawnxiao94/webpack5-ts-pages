/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 18:24:13
 * @LastEditTime: 2021-04-11 18:29:08
 * @FilePath: /webpack5-ts-pages/src/common/config.ts
 */
interface comConfig {
  TOKEN_KEY: string;
}

const commonConfig:comConfig = {
  // 本地存储token 的key
  TOKEN_KEY: 'Admin_Token_key'
}
export default commonConfig
