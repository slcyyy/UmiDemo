/*
 * @Date: 2020-12-29 15:36:03
 * @LastEditors: LuoChun
 * @LastEditTime: 2020-12-29 16:49:29
 */
/**
 * umi的配置文件
 */
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  routes: routes,
  antd: {},
  proxy: {
    '/api': {
      target: 'https://public-api-v1.aspirantzhang.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
