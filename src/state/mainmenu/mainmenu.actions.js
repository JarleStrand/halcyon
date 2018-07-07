



export const MAINMENU_CLEAR = 'MAINMENU_CLEAR'
export const MAINMENU_ADDITEM = 'MAINMENU_ADDITEM'



export function clearMenu(name) {
    return { type:MAINMENU_CLEAR }
}



export function addMenuItem(description, action) {
    return { type: MAINMENU_ADDITEM, description: description, action: action}
}


