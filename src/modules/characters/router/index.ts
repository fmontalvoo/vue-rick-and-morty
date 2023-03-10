import type { RouteLocationNormalized } from 'vue-router'

import CharacterLayout from '@/modules/characters/layout/CharacterLayout.vue';

const router = {
    name: 'characters',
    redirect: { name: 'characters-list' },
    component: CharacterLayout,
    children: [
        {
            path: 'list',
            name: 'characters-list',
            component: () => import('@/modules/characters/pages/CharacterList.vue'),
        },
        {
            path: 'search',
            name: 'characters-search',
            component: () => import('@/modules/characters/pages/CharacterSearch.vue'),
        },
        {
            path: ':id',
            name: 'characters-detail',
            props: (route: RouteLocationNormalized) => ({ id: Number(route.params.id) }),
            component: () => import('@/modules/characters/pages/CharacterDetail.vue'),
        },
    ]
}

export default router