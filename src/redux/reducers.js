/*
*   根据prevstate 和 action来生成newState
*
* **/

import {combineReducers} from 'redux';

function fn(prevState={},action){
    switch (action.type) {
        default:
            return prevState;
    }
}

export default combineReducers({
    fn
})