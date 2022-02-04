require('./bootstrap');


import vue from 'vue';

window.Vue = vue

import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

import VueRouter from 'vue-router';
import router from './router';
import Vue from 'vue';
 
import store from './store';


Vue.use(VueRouter);
Vue.use(VueAxios,axios);

var loggedIn = sessionStorage.getItem('loggedIn');
if(loggedIn){
	store.dispatch('authUser')
}
 

new Vue({
    el: '#app',
  	router,
	store,
    render:h =>h(App)
})