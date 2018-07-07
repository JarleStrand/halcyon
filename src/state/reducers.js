import { combineReducers } from 'redux'
import auth from './auth/auth.reducer'
import reqpending from './reqpending/reqpending.reducer'
import trees from './trees/trees.reducer'
import mainMenu from './mainmenu/mainmenu.reducer'


export default combineReducers({
    auth,
    reqpending,
    trees,
    mainMenu
})


