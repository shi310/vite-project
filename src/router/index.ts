import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/**
 * 路由的历史记录: 一共有三种方式
 * ```js
 * createWebHashHistory() // 这是一种哈希值的返回方式
 * createWebHistory() // 这是普通的web返回方式
 * createRouterMatcher() // 这是一种还没学过的方式
 * ```
 */
const routerHistory = createWebHashHistory()


/**
 * 路由的设定: routers
 * ```js
 * path:'/' // 路由的路径
 * component: () => import('../pages/home/index.vue') // 路由的页面
 * ```
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: "index",
        children: [
            {
                path: '/index',
                component: () => import('../view/Index.vue'),
            },
            {
                path: '/train',
                component: () => import('../view/Train.vue'),
                redirect: "/train/1-1",
                children: [
                    {
                        path: '/train/1-1',
                        component: () => import('../components/train/train-1-1.vue'),

                    },
                    {
                        path: '/train/2-1',
                        component: () => import('../components/train/train-2-1.vue'),
                    },
                    {
                        path: '/train/2-2',
                        component: () => import('../components/train/train-2-2.vue'),
                    },
                    {
                        path: '/train/2-3',
                        component: () => import('../components/train/train-2-3.vue'),
                    },
                    {
                        path: '/train/2-4',
                        component: () => import('../components/train/train-2-4.vue'),
                    },
                    {
                        path: '/train/2-5',
                        component: () => import('../components/train/train-2-5.vue'),
                    },
                ]
            }
        ]
    },
    {
        path: '/menu',
        component: () => import('../view/Menu.vue'),
    },
]

/**
 * ```js
 * createRouter({ // 函数接受不了两个参数
 *   history: routerHistory, //历史记录的方式
 *   routes: routes, // 页面的地址
 * })
 * 
 * ```
 */
// 路由的构造
const router = createRouter({
    history: routerHistory,
    routes: routes,
})

// 方法导出
export default router