/**
 * 路由路由
 * Created by pmumu on 2017/3/4.
 */
import Index from './../components/user/index'
import Login from './../components/user/login'
import Home from './../components/user/home'
import tools from './../components/tools/tools'
import userCenter from './../components/user/userCenter'
import Search from './../components/tools/search'
import addKeyword from './../components/user/addKeyword'
import notFound from './../components/notfound'

export default [
  {path: '/', name: 'index', component: Login, meta: {auth: false}},
  {
    path: '/user',
    name: 'user',
    component: Index,
    meta: {auth: true, title: 'AoBuy', hideBack: true},
    children: [                            //   嵌套路由
      {path: '/home', name: 'home', component: Home, meta: {auth: true, title: 'AoBuy', hideBack: true}},
      {path: '/tools', name: 'tools', component: tools, meta: {auth: true, title: '工具'}},
      {path: '/userCenter', name: 'userCenter', component: userCenter, meta: {auth: true, title: '用户中心'}},
      {path: '/search', name: 'search', component: Search, meta: {auth: true, title: '搜索'}},
      {path: '/addKeyword', name: 'addKeyword', component: addKeyword, meta: {auth: true, title: '添加关注'}}
    ]
  },
  {path: '*', name: 'notFound', component: notFound, meta: {auth: false}}
]
