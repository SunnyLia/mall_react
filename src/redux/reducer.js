import { combineReducers } from 'redux';
import * as types from './action-types';
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
    switch (action.type) {
        case types.SET_HOME_SHOW:
            return {
                ...state,
                show: {
                    list: [...state.show.list, ...action.payload.list],
                    hasMore: action.payload.list.length > 0 ? true : false,
                    loading: false,
                    offset: state.show.offset + 5
                }
            }
        case types.CHANGE_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case types.SET_HOME_SLIDERS:
            return {
                ...state,
                sliders: action.payload
            };
        case types.SET_HOME_MENU:
            return {
                ...state,
                menu: action.payload
            };
        case types.SET_LOGIN_TYPE:
            return {
                ...state,
                isLogin: true
            };
        case types.SET_PULLLOAD_ACTION:
            return {
                ...state,
                show: {
                    ...state.show,
                    action: action.payload
                }
            };
        default:
            return state
    }
}

export default combineReducers({
    selectedPayload
})
