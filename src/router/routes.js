const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound/index.vue')},
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home'),
        // redirect: '/first/firstChildOne',
        redirect: '/first/firstChildOne',

        children: [
            {
                path: '/first',
                name: 'first',
                component: () => import('@/pages/pageContent/First'),
                // redirect: '/first/firstChildOne',
                children: [
                    {
                        path: '/first/firstChildOne',
                        name: 'firstChildOne',
                        component: () => import('@/pages/pageContent/First/FirstChildOne.vue')
                    },
                    {
                        path: '/first/firstChildTwo',
                        name: 'firstChildTwo',
                        component: () => import('@/pages/pageContent/First/FirstChildTwo.vue')
                    },
                ]

            },
            {
                path: '/list',
                name: 'list',
                component: () => import('@/pages/pageContent/List'),
                children: [
                    {
                        path: '/list/listOne',
                        name: 'ListOne',
                        component: () => import('@/pages/pageContent/List/ListOne'),
                    },
                    {
                        path: '/list/listTwo',
                        name: 'ListTwo',
                        component: () => import('@/pages/pageContent/List/ListTwo'),
                    },

                ]
            },
            {
                path: '/edit',
                name: 'edit',
                component: () => import('@/pages/pageContent/Edit'),
            },
            {
                path: '/detail',
                name: 'detail',
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