/*
* 包含n个  生产action对象的工厂函数  模块
* */

import {SAVE_USER} from './action-type';

export const saveUser = (data) => ({type: SAVE_USER, data: data})