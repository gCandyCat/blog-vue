import home from './views/home'
import subject from './views/subject'
import expert from './views/expert'
import sort from './views/sort'
import userblog from './views/userblog'
import register from './components/register'
import user_info from './views/user_info'
import blogmenuList from './components/blogmenuList'
import blogAbstractList from './components/blogAbstractList'
import editblog2 from './components/editblog2'
import blog_info from './components/blog_info'
import blog from './views/blog'

export default function (router) {
  router.map({
    '/': {
       name: 'home',
       component:  require('./views/home.vue')
     },
    '/home': {
      name: 'home',
      component: require('./views/home.vue')
    },
    '/subject': {
      name: 'person',
      component: require('./views/subject.vue')
    },
    '/expert': {
      name: 'expert',
      component: require('./views/expert.vue')
    },
    '/sort': {
      name: 'sort',
      component: require('./views/sort.vue')
    },
    '/userblog': {
      name: 'userblog',
      component: require('./views/userblog.vue'),
      subRoutes: {
             '/': {
            name: 'blogmenuList',
            component:  require('./components/blogmenuList.vue')
          },
           '/blogmenuList': {
            name: 'blogmenuList',
            component:  require('./components/blogmenuList.vue')
          },
          '/blogAbstractList': {
            name: 'blogAbstractList',
            component:  require('./components/blogAbstractList.vue')
          },
          '/editblog2': {
            component: require('./components/editblog2.vue')
          },
          '/blog_info': {
            component: require('./components/blog_info.vue')
          },
        },
      },
      '/blog': {
      name: 'blog',
      component: require('./views/blog.vue'),
      subRoutes: {
             '/': {
            name: 'blogmenuList',
            component:  require('./components/blogmenuList.vue')
          },
           '/blogmenuList': {
            name: 'blogmenuList',
            component:  require('./components/blogmenuList.vue')
          },
          '/blogAbstractList': {
            name: 'blogAbstractList',
            component:  require('./components/blogAbstractList.vue')
          },
          '/blog_info': {
            component: require('./components/blog_info.vue')
          },
        },
      },
    '/register':{
      name: 'register',
      component: require('./components/register.vue')
    },
    '/user_info': {
      name: 'user_info',
      component: require('./views/user_info.vue')
    },


/*'/home': {
  component: Home,
  // 定义子路由
    subRoutes: {
        '/news': {
        component: News
      },
    'detail/:id': {
        name: 'detail',
        component: NewsDetail
      },
    '/message': {
        component: Message
      }
    }
},*/

    /*'/editblog2': {
      name: 'editblog2',
      component: require('./components/editblog2.vue')
    },*/
    /*,
    '*': {
      component: require('./components/NotFound.vue')
    }*/

  })
  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}