/**
* VueShop Store
*/

import Vue from 'vue'
import Vuex from 'vuex'

// modules
import ecommerce from './modules/ecommerce';
import sidebar from './modules/sidebar';
import settings from './modules/settings';
import payment from './modules/payment';
import blog from './modules/blog';
import productDetail from './modules/productDetail';
import auth from './modules/auth';
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        ecommerce,
        sidebar,
        settings,
        payment,
        blog,
        productDetail,
        auth
    },
    plugins: [createPersistedState()],
    getters
})
export default store