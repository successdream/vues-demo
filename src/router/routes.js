const routes = [
    {
        path: '/',
        name: 'home',
        component: import('../pages/Home'),
        children: [
            {
                path: '/',
                name: 'home',
                component: import('../pages/Home'),
            }
        ]
    }
]
export default routes;