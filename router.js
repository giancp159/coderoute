import Vue from "vue";
import VueRouter from 'vue-router'
// import component1 from '../components/component1'
import component1 from './components/component1'
import first from './components/pages/basic/first'
import secondroute from './components/pages/basic/secondroute'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/home'

//Admin pages
import home from './components/pages/home'
import tags from './admin/pages/tags'
import category from './admin/pages/category'
import usecom from './vuex/usecom'
import adminusers from './admin/pages/adminusers'
import login from './admin/pages/login'
import role from './admin/pages/role'
import assignRole from './admin/pages/assignRole'
import createBlog from './admin/pages/createBlog'
import blogs from './admin/pages/blogs'
import editblog from './admin/pages/editblog'
import notfound from './admin/pages/notfound'

Vue.use(VueRouter)

const routes=  [

    {

        path: '/',
        component:home,
        name:'home'
    }  ,     
    {

        path: '/blogs',
        component:blogs,
        name:'blogs'
    },
    {

        path: '/editblog/:id',
        component:editblog,
        name:'editblog'
    },
    
    {

        path: '*',
        component:notfound,
        name:'notfound'
    },
    {

        path: '/role',
        component:role,
        name:'role'
    }  ,
    {

        path: '/createBlog',
        component:createBlog,
        name:'createBlog'
    },
     {

        path: '/assignRole',
        component:assignRole,
        name:'assignRole'
    }  , 
    {
        path: '/login',
        component: login,
        name: 'login'


    },
    {

        path: '/adminusers',
        component:adminusers,
        name:'adminusers'
    }  ,
    {

        path: '/testvuex',
        component:usecom,
        name:'usecom'
    }  ,
    {

        path: '/tags',
        component:tags,
        name: 'tags'

    }
    ,
    {

        path: '/category',
        component:category,
        name: 'category'

    }  ,
    {

        path: '/my-new-vue-router',
        name:'newroute',
        component:first
    }  ,
    {

        path: '/my-second-vue-router',
        name:'newsecondroute',
        component:secondroute
    }   
    ,

    {

        path:'/hooks',
        name:'hooks',
        component:hooks
    }   ,
    
    {

        path:'/methods',
        name:'methods',
        component:methods
    }   


];  

export default new VueRouter({
	mode: 'history',
	routes

})