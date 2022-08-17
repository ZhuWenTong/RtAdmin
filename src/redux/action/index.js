/**
 * Action 类型
 */
export const type = {
    SWITCH_MENU: 'SWITCH_MENU',
    CHANGE_REDUX_TEXT: 'CHANGE_REDUX_TEXT'
}
export function switchMenu (menuName) {
    // console.log('action:  ' + menuName)
    localStorage.setItem('menuName', menuName)
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}

export function changeReduxText (text) {
    return {
        type: type.CHANGE_REDUX_TEXT,
        text
    }
}
