import FirstChildOne from '@/pages/pageContent/First/FirstChildOne.vue';
import FirstChildTwo from '@/pages/pageContent/First/FirstChildTwo.vue';

const routes = [
    {
        path: '/first/child1',
        name: 'firstChild1',
        component: FirstChildOne
    },
    {
        path: '/first/child2',
        name: 'firstChild2',
        component: FirstChildTwo
    },
]

export default routes;