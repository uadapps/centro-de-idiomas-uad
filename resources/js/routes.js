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
    //ejemplos de rutas crud
    {
        name:'products',
        path:'/products',
        component: () => import ('./components/products/Products.vue')

    },
    {
        name:'products',
        path:'products/:id',
        component: Home
    } 
]