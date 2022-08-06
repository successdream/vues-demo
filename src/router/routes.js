const routes = [
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound/index.vue')},
    {
        path: '/',
        name: '内容管理',
        component: () => import('@/pages/Home'),
        // redirect: '/first/firnistChildOne',
        // redirect: '/first/firstChildOne',
        redirect: '/detail',

        children: [
            {
                path: '/first',
                name: '内容一级',
                component: () => import('@/pages/pageContent/First'),
                // redirect: '/first/firstChildOne',
                // children: [
                //     {
                //         path: '/first/firstChildOne',
                //         name: 'firstChildOne',
                //         component: () => import('@/pages/pageContent/First/FirstChildOne.vue')
                //     },
                //     {
                //         path: '/first/firstChildTwo',
                //         name: 'firstChildTwo',
                //         component: () => import('@/pages/pageContent/First/FirstChildTwo.vue')
                //     },
                // ]

            },
            {
                path: '/list',
                name: '列表',
                component: () => import('@/pages/pageContent/List'),
                children: [
                    {
                        path: '/list/listOne',
                        name: '列表首页',
                        component: () => import('@/pages/pageContent/List/ListOne'),
                    },
                    {
                        path: '/list/listTwo',
                        name: '列表二级',
                        component: () => import('@/pages/pageContent/List/ListTwo'),
                    },

                ]
            },
            {
                path: '/edit',
                name: '编辑',
                component: () => import('@/pages/pageContent/Edit'),
            },
            {
                path: '/detail',
                name: '详情',
                component: () => import('@/pages/pageContent/Detail'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: import('@/pages/Login')
    }
]
export default routes;