import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/home'
// import TopicDetail from '@/pages/topicDetail/topicDetail'
// import UserInfo from '@/pages/user/userHome'
Vue.use(Router)

const Home = () => import('@/pages/home/home')
const TopicDetail = () => import('@/pages/topicDetail/topicDetail')
const UserInfo = () => import('@/pages/user/userHome')


export default new Router({
  mode: 'history',
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
    },
    {
      path: '/user/:username',
      name: 'userInfo',
      component: UserInfo
    }
  ]
})
