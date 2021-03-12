/*
 * @Date: 2020-12-29 15:36:28
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-03-12 17:28:56
 */
export default [
  { exact: true, path: '/', component: '@/pages/homepage' },
  {
    exact: true,
    path: '/assistCenter/index',
    component: '@/pages/assistCenter',
  },
  {
    path: '/user',
    //添加公共样式背景
    component: '@/layouts/userLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: 'user/login',
      },
    ],
  },
  // { path: '/users',component:'@/pages/users'}
];
