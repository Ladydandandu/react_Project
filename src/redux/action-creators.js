/*
* 包含n个  生产action对象的工厂函数  模块
* */

import {
    SAVE_USER,
    REMOVE_USER,
    SET_TITLE,
    GET_CATEGORIES_SUCCESS,
    ADD_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_SUCCESS,

} from './action-type';

import {reqGetCategories,reqAddCategory,reqUpdateCategory} from '../api/index';
//保存用户数据
export const saveUser = (user) => ({type: SAVE_USER, data: user});

//清除用户数据
export const removeUser = (user) => ({type: REMOVE_USER});

//设置title
export const setTitle = (title) => ({type: SET_TITLE, data: title});

//获取分类数据  同步action对象
export const getCategoriesSuccess = (categories) => ({type: GET_CATEGORIES_SUCCESS, data: categories})
//获取分类数据  异步action对象
export const getCategories = () => {
    return async (dispath) => {
        //    发送请求  请求分类列表数据
        const result = await reqGetCategories()
        //    更新redux状态
        dispath(getCategoriesSuccess(result));
    }
};

//添加分类数据
const addCategorySuccess = (category) => ({type: ADD_CATEGORY_SUCCESS, data: category});
export const addCategory = (categoryName) => {
    return async (dispatch) => {
        const result = await reqAddCategory(categoryName);
        dispatch(addCategorySuccess(result));
    }
};


//修改分类数据
const updateCategorySuccess = (category) => ({type: UPDATE_CATEGORY_SUCCESS, data: category});
export const updateCategory = (categoryId,categoryName) => {
    return async (dispatch) => {
        const result = await reqUpdateCategory(categoryId,categoryName);
        dispatch(updateCategorySuccess(result));
    }
};
