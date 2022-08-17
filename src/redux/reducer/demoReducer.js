import { type } from "./../action"

/**
 * Reducer 数据处理
 */
 const initialState = {
  reduxText: 'Hello Redux'
}

const demoReducer = (state = initialState, action) => {
  let text = null
  switch (action.type) {
    case type.CHANGE_REDUX_TEXT:
      text = {
        ...state, // 原有状态保留
        reduxText: action.text
      }
      break
    default:
      text = {
        ...state
      }
      break
  }
  return text
}

export default demoReducer
