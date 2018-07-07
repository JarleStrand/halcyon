import { MAINMENU_CLEAR, MAINMENU_ADDITEM  } from './mainmenu.actions'



const mainMenu  = (state, action) => {
    switch (action.type){
        case MAINMENU_CLEAR:
            return { menuList: [], keyCount:0 };
        case MAINMENU_ADDITEM:
            return { menuList : [...state.menuList, { description: action.description, action: action.action, key: state.keyCount.toString()} ], keyCount: state.keyCount + 1 } ;
        default:
            if(typeof(state)==='undefined')
                return { menuList : [], keyCount:0 }
            else
                return state;        
    }
}


export default mainMenu;


