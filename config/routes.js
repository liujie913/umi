export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎页',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '表单列表',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'React',
    icon: 'table',
    path: '/react',
    access: 'table',
    routes: [
      {
        path: '/react/hooks',
        name: 'hooks',
        icon: 'smile',
        component: './react/hooks',
      },
    ],
  },
  {
    name: 'Api',
    icon: 'table',
    path: '/api-demo',
    component: './api',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
