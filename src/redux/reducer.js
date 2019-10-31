import { combineReducers } from 'redux';
// import * as types from './action-types';
let initState = {
    category: 'all', //分类
    sliders: [], //轮播
    menu: [], //菜单
    show: {
        list: [],//列表
        hasMore: true,//是否还有数据
        offset: 0,//每页的条数
        loading: false,//是否正在加载
    },
    isLogin: false //是否登陆
}

const selectedPayload = (state = initState, action) => {
            return state
    
}

export default combineReducers({
    selectedPayload
})
