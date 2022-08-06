

const routes = [
    {
        path: '/first/firstChildOne',
        name: '内容二级',
        component: () => import('@/pages/pageContent/First/FirstChildOne.vue')
    },
    {
        path: '/first/firstChildTwo',
        name: '内容三级',
        component: () => import('@/pages/pageContent/First/FirstChildTwo.vue')
    },
]

export default routes;