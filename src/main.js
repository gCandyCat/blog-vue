import Vue from 'vue'
import testrouter from './testrouter'
import userblog from './views/userblog'
import skitter from './components/skitter'
//import login from './components/login'

import VueRouter from 'vue-router'
import routerConfig from './routes.js'



 Vue.use(VueRouter)
var router = new VueRouter()

routerConfig(router);
window.router = router;

//new Vue({
//  el: 'body',
//  components: { login }
//})

var APP={
  components: { testrouter }
} ;

router.start(APP,'body')

