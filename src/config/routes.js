import Login from '../containers/login';
import Home from '../components/home';

const routes = [
    {
        path:'/',  //路由路径
        exact:true,  //是否严格匹配路径
        component:Home   //组件
    },
    {
        path:'/login',  // 路由路径
        exact:true,     //是否严格匹配路径
        component:Login   //组件
    },

];

export default routes;