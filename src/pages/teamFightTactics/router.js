import vue from 'vue'
import Router from 'vue-router'

vue.use(Router)

export default new Router({
    base: '/teamFightTactics/',
    mode: 'history',
    routes:[{
        path: '/',
    },{
        path: '/a',
        component: () => import('./view/test/index')
    }]
})
