import { type } from "./../action"

/**
 * Reducer 数据处理
 */
const initialState = {
    menuName: '首页'
}

export default (state = initialState, action) => {
    console.log('action: =====', action, state)
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state, // 原有状态保留
                menuName: action.menuName
            }
            break
        default:
            return {
                ...state
            }
            break
    }
}
