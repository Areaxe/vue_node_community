import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import TopicDetail from '@/pages/topicDetail/topicDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/topics',
            name: 'Home',
            component: Home
        },
        {
            path: '/topics/:id',
            name: 'topicDetail',
            component: TopicDetail
        }
    ]
})
