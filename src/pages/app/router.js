import vue from 'vue'
import router from 'vue-router'

vue.use(router)

export default new router({
    base: '/app/',
    mode: 'history',
    routes:[{
        path: '/',
    },{
        path: '/a',
        component: () => import('./view/test/index')
    }]
})