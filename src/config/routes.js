import Home from '../components/home';
import Category from '../containers/category/index';
import Product from '../containers/product';

const routes = [
    {
        path:'/',  //路由路径
        exact:true,  //是否严格匹配路径
        component:Home   //组件
    },
    {
        path:'/category',  //路由路径
        exact:true,  //是否严格匹配路径
        component:Category   //组件
    },

    {
        path:'/product',  //路由路径
        exact:true,  //是否严格匹配路径
        component:Product   //组件
    },
];

export default routes;