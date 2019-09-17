/*
*   封装发送请求函数
*
* */

import axios from './request';
//请求登录
export const reqLogin = (username, password) => axios.post('/login', {username, password});

//请求获取分类列表数据
export const reqGetCategories = () => axios.get('/category/get');

// 请求添加数据
export const reqAddCategory = (categoryName) => axios.post('/category/add', {categoryName});

//请求更新数据
export const reqUpdateCategory = (categoryId, categoryName) => axios.post('/category/update', {
    categoryId,
    categoryName
});

//请求获取列表
export const reqGetProducts = (pageNum, pageSize) => axios.get('/product/list',{params: {pageNum, pageSize}});

// 添加商品列表
export const reqAddProducts = ({name,desc,price,categoryId,detail}) => axios.post('/product/add',{name,desc,price,categoryId,detail});

//更新商品
export const reqUpdateProducts = ({name,desc,price,categoryId,detail,productId}) => axios.post('/product/update',{name,desc,price,categoryId,detail,productId});
