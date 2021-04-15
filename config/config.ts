/*
 * @Date: 2020-12-29 15:36:03
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-13 16:16:58
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
  dva: {
    hmr: true, //热更新
  },
  proxy: {
    '/api': {
      target: 'https://public-api-v1.aspirantzhang.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
