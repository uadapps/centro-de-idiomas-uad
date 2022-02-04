const Home = () => import ('./components/Home');


export const routes =   [

    {
        name:'home',
        path:'/',
        component: Home
    },
    {
        name:'login',
        path:'/iniciar-sesion',
        component: () => import ('./components/Login.vue')
    },
	{
		name:'grupo-alumnos',
		path:'/grupos/:slug/alumnos',
		component: () => import ('./components/docentes/Grupos/GrupoAlumnos.vue')
	}
    
	
]