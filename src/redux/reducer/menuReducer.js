import { type } from "./../action"

/**
 * Reducer 数据处理
 */
 const initialState = {
  menuName: '首页'
}

const menuReducer = (state = initialState, action) => {
  // console.log('action: =====', action, state)
  let menuData = null
  switch (action.type) {
      case type.SWITCH_MENU:
          menuData = {
              ...state, // 原有状态保留
              menuName: action.menuName
          }
          break
      default:
          menuData = {
              ...state
          }
          break
  }
  return menuData
}

export default menuReducer
