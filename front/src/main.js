/**
 * App Entry File
 * Copyright 2018. All Rights Reserved
 */
/* eslint-disable */
import 'babel-polyfill'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import Nprogress from 'nprogress'
import VueI18n from 'vue-i18n'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import InstantSearch from 'vue-instantsearch'
import VueMoment from 'vue-moment'
import App from './App.vue'
import { store } from './store/store'
import AppConfig from 'Constants/AppConfig'
import { getToken } from '@/utils/auth' // getToken from cookie
import { Message } from 'element-ui'
// localisation messages
import messages from './lang'

// global components
import GlobalComponents from './globalComponents'

//router 
import router from './router'

// all css files included
import './lib/EmbryoCss'

// Alliging Position for the toaster
const options = {
	toast: {
		position: SnotifyPosition.rightTop
	}
}

//plugins
Vue.use(VueMoment)
Vue.use(InstantSearch)
Vue.use(VueI18n)
Vue.use(Snotify, options)
Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyDC6tKEbtRlB6B0HgrFEN9P6ztTSJ89xt8",
		libraries: "places"
	}
});
Vue.use(GlobalComponents)



/*
// router navigation guards
router.beforeEach((to, from, next) => {
	Nprogress.start();
	next();
})

*/






// router navigation guards
/*router.beforeEach((to, from, next) => {
	   switch(to.meta.type){
            case 'admin':
            (window.user.nifiqudtysse) ? next() : next({path:'/error'});
              break;
            case 'couturier':
            (window.user.nifiqusse == 'couturier'  || window.user.nifiqudtysse ) ? next() : next({path:'/error'});
              break;
             case 'coursier':
            (window.user.nifiqusse == 'coursier' || window.user.nifiqudtysse) ? next() : next({path:'/error'});
              break;
            default:
            	Nprogress.start();
            	next();
             break;
      }
        
})
*/


// permission judge function
function hasPermission(roles, permissionRoles) {

  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (getToken()) {
    // determine if there has token

    if (to.path === '/checkout') {
      next({ path: '/checkout/payment' })
      Nprogress.done()
    }
    
    if (to.path === '/session/signin' || to.path === '/session/signup' ) {
      next({ path: '/home' })
      Nprogress.done()
    }else {
      /* if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: { noGoBack: true }
          })
        }*/
         
         

        if (store.getters.roles.length === 0) {
        store
          .dispatch('GetUserInfo')
          .then(res => {
            const roles = res.data.roles
            next()
            /*store.dispatch('GenerateRoutes', { roles }).then(() => {
              router.addRoutes(store.getters.addRouters)
              next({ ...to, replace: true })
            })*/
          })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      }else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: { noGoBack: true }
          })
        }
      }

     /* if (store.getters.roles.length === 0) {
        store
          .dispatch('GetUserInfo')
          .then(res => {
            const roles = res.data.roles
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              router.addRoutes(store.getters.addRouters)
              next({ ...to, replace: true })
            })
          })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      }else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: { noGoBack: true }
          })
        }
      } */
    }
  } else{

     if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: { noGoBack: true }
          })
        }
      //next()
      Nprogress.done()
  }
})


router.afterEach(() => {
	Nprogress.done();
	setTimeout(() => {
		const contentWrapper = document.querySelector("html");
		if (contentWrapper !== null) {
			contentWrapper.scrollTop = 0;
		}
	}, 200);
})

// creating a instance of vue localisation module
const i18n = new VueI18n({
	locale: store.getters.selectedLocale.locale,
	messages,
})


Vue.config.productionTip = false

new Vue({
	store,
	router,
	i18n,
	vuetify,
	render: h => h(App)
}).$mount('#app')