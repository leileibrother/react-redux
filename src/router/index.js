module.exports = {
    routes: [
        {
            path: '/redux', exact: true,
            component: resolve => require(['src/component/counter'], resolve),
            meta: {
                swsxMc: '测试redux'
            }
        },
        {
            path: '/index', exact: true,
            component: resolve => require(['src/container/main'], resolve),
            meta: {
                swsxMc: '主页'
            }
        },
        {
            path: '/home', exact: true,
            component: resolve => require(['src/container/home'], resolve),
            meta: {
                swsxMc: 'home页'
            }
        },
        {
            path: '/list', exact: true,
            component: resolve => require(['src/container/list'], resolve),
            meta: {
                swsxMc: '列表页'
            }
        },
        {
            path: '/about', exact: true,
            component: resolve => require(['src/container/about'], resolve),
            meta: {
                swsxMc: '关于'
            }
        },
        {
            path: '/example', exact: true,
            component: resolve => require(['src/container/other/father'], resolve),
            meta: {
                swsxMc: '关于'
            }
        }
    ],
};