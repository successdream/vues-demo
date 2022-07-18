const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home'),

        redirect: '/first',
        children: [
            {
                path: '/first',
                name: 'first',
                component: () => import('@/pages/pageContent/First'),
                // component: () => import('@/pages/pageContent/First'),

            },
            {
                path: '/list',
                name: 'home',
                component: () => import('@/pages/pageContent/List'),
                children: [
                    {
                        path: '/list/item',
                        name: 'item',
                        component: () => import('@/pages/pageContent/List/Item'),
                    },
                    {
                        path: '/list/itemSecond',
                        name: 'itemSecond',
                        component: () => import('@/pages/pageContent/List/ItemSecond'),
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