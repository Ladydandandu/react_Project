/*
* 包含n个  生产action对象的工厂函数  模块
* */

import {SAVE_USER, REMOVE_USER, SET_TITLE} from './action-type';


//保存用户数据
export const saveUser = (user) => ({type: SAVE_USER, data: user});

//清除用户数据
export const removeUser = (user) => ({type: REMOVE_USER});

//设置title
export const setTitle = (title) => ({type: SET_TITLE, data: title});