
import { CLEAR_TABLE_DATA, SET_TABLE_DATA, SET_GRAPH_DATA } from './accountdata.actions'



const accountdata = (state, action) => {
    let newState
    switch (action.type) {
        case CLEAR_TABLE_DATA:
            return {};

        case SET_TABLE_DATA:
            if (state.month !== action.month || state.unit !== action.unit)
                newState = { month: action.month, unit: action.unit }
            else
                newState = { ...state }
            newState.tableData = action.data
            return newState;

        case SET_GRAPH_DATA:
            if (state.month !== action.month || state.unit !== action.unit)
                newState = { month: action.month, unit: action.unit }
            else
                newState = { ...state }
            newState.graphData = action.data
            return newState;

        default:
            if (typeof (state) === 'undefined')
                return {}
            else
                return state;
    }

}


export default accountdata;



