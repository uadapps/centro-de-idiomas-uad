import Vue from "vue";
import VueRouter from 'vue-router';
import store from '../store';
Vue.use(VueRouter);


//import NotFoundComponent from './components/NotFoundComponent.vue';

const router = new VueRouter({
    mode: "history",
    routes:  [

		{
			name:'home',
			path:'/',
			component: () => import ('../components/Home'),
			meta: {
                requiresAuth: true,
                admin: true,
                layout: 'admin',
                breadCrumb: 'Reviews'
            }
		},
		{
			name:'login',
			path:'/iniciar-sesion',
			component: () => import ('../components/Login.vue')
		},
		{
			name:'grupo-alumnos',
			path:'/grupos/:slug/alumnos',
			component: () => import ('../components/docentes/Grupos/GrupoAlumnos.vue'),
			meta: {
                requiresAuth: true,
                admin: true,
                layout: 'admin',
                breadCrumb: 'Reviews'
            }
		}
		
		
	]
});

router.beforeEach((to, from, next) => {
	console.log("to",to);
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
	  console.log("verifica login",store.getters.isLoggedIn)
      if (!store.getters.isLoggedIn) {
		console.log("no esta logueado")
        next({
            name: 'login'
        })
      } else {
		console.log("carga pagina")
        next()
      }
    }
    if (to.matched.some(record => record.meta.requiresAdmin)) {
      // this route requires auth, check if logged in
      // if not, redirect to home page.
      if (!store.getters.loggedUser.type == 'admin') {
        next({
            name: 'home'
        })
      } else {
        next()
      }
    }  
     else {
      next() // make sure to always call next()!
    }
})
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.pageTitle || 'Test App';
    });
});

export default router;