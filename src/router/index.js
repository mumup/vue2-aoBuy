/**
 * 路由路由
 * Created by pmumu on 2017/3/4.
 */
const Login = r => require.ensure([], () => r(require('./../components/user/login')), 'Login')
const Register = r => require.ensure([], () => r(require('./../components/user/register')), 'Login')

const Home = r => require.ensure([], () => r(require('./../components/user/home')), 'Home')
const Index = r => require.ensure([], () => r(require('./../components/user/index')), 'Home')
const addKeyword = r => require.ensure([], () => r(require('./../components/user/addKeyword')), 'Home')

import addSign from './../components/tools/addSign'
import tools from './../components/tools/tools'
import userCenter from './../components/user/userCenter'
import Search from './../components/tools/search'
import Signer from './../components/tools/signer'
import notFound from './../components/notfound'
import reward from './../components/reward'

export default [
  {
    path: '/',
    name: 'index',
    component: Login,
    meta: {auth: false}
  },
  {path: '/register', name: 'register', component: Register, meta: {auth: false, title: '注册', hideBack: true}},
  {
    path: '/user',
    name: 'user',
    component: Index,
    meta: {title: 'AoBuy', hideBack: true},
    children: [                            //   嵌套路由
      {path: '/home', name: 'home', component: Home, meta: {title: 'AoBuy', hideBack: true}},
      {path: '/tools', name: 'tools', component: tools, meta: {title: '工具'}},
      {path: '/userCenter', name: 'userCenter', component: userCenter, meta: {title: '用户中心'}},
      {path: '/search', name: 'search', component: Search, meta: {title: '搜索'}},
      {path: '/addKeyword', name: 'addKeyword', component: addKeyword, meta: {title: '添加关注'}},
      {path: '/signer', name: 'signer', component: Signer, meta: {title: '签到'}},
      {path: '/addSign', name: 'addSign', component: addSign, meta: {title: '添加签到'}},
      {path: '/reward', name: 'reward', component: reward, meta: {auth: false, title: '打赏'}}
    ]
  },
  {path: '*', name: 'notFound', component: notFound, meta: {auth: false}}
]
