/*
 * @Date: 2020-12-29 15:36:28
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-05-08 10:24:09
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
  //react学习
  {
    name: 'react',
    path: '/react-study',
    component: '@/pages/react-study',
    routes: [
      {
        name: 'react-eventmouse',
        path: '/react-study/react-eventmouse',
        component: '@/pages/react-study/event-mouse',
      },
    ],
  },
  //可视化卡片定制
  {
    name: 'editor',
    path: '/editor',
    component: '@/pages/visual-editor',
  },
  // { path: '/users',component:'@/pages/users'}
];
