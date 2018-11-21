import vue from 'vue'
import router from 'vue-router'

vue.use(router)

export default new router({
    base: '/other/',
    mode: 'history',
    routes:[{
        path: '/',
    },{
        path: '/a',
        component: () => import('./view/test/index')
    }]
})