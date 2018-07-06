import { SET_TREE_DATA, TOGGLE_EXPAND_NODE, SELECT_TREE_NODE, EXPAND_SELECT_NODE } from '../trees/trees.actions'
import { TreeAlgorithms } from '../../libs/tree'






const trees = (state = {}, action) => {
    let newTree
    let newSelected
    switch (action.type) {
        case SET_TREE_DATA:
            return { ...state, [action.domain]: action.tree, ["sel" + action.domain]: null }

        case TOGGLE_EXPAND_NODE:
            if (!state[action.domain])
                return { ...state }
            return { ...state, [action.domain]: TreeAlgorithms.toggleExpand(TreeAlgorithms.getTreeCopy(state[action.domain]), action.id) }

        case SELECT_TREE_NODE:          
            if (!state[action.domain])
                return { ...state }
            newTree = TreeAlgorithms.setSelected(TreeAlgorithms.getTreeCopy(state[action.domain]), action.id)
            newSelected = TreeAlgorithms.getNode(newTree, action.id)  
            return  { ...state, [action.domain]: newTree, ["sel" + action.domain]: newSelected }

        case EXPAND_SELECT_NODE:
            if (!state[action.domain])
                return { ...state }
            newTree = TreeAlgorithms.expandToAndSelect(TreeAlgorithms.getTreeCopy(state[action.domain]), action.id) 
            newSelected = TreeAlgorithms.getNode(newTree, action.id)               
            return  { ...state, [action.domain]: newTree, ["sel" + action.domain]: newSelected }
                
        default:
            return state
    }

}


export default trees;


