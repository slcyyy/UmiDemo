/*
 * @Date: 2020-12-29 15:36:03
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-28 15:15:59
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
    // immer: { enableES5: true } //兼容 IE11
  },
  proxy: {
    '/api': {
      target: 'https://public-api-v1.aspirantzhang.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
