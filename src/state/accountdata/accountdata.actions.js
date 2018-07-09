import {BixitApi} from '../../libs/bixitapi'
import {startRequests, endRequests} from '../reqpending/reqpending.actions'


export const CLEAR_TABLE_DATA = 'ACCOUNTDATA_CLEAR'
export const SET_TABLE_DATA = 'ACCOUNTDATA_GET_TABLE_DATA'
export const SET_GRAPH_DATA = 'ACCOUNTDATA_GET_GRAPH_DATA'





export function clearAccountingData() {
    return { type: CLEAR_TABLE_DATA }
}



export function setTableData(month, unit, data) {
    return { type: SET_TABLE_DATA, month: month, unit:unit, data: data }
}



export function setGraphData(month, unit, data) {
    return { type: SET_GRAPH_DATA, month: month, unit:unit, data: data }
}



export function getTableData(month, unit){
    return (dispatch) => {
        dispatch(startRequests())

        BixitApi.getAccountsData()
        .then(json => {
            dispatch(endRequests());            
            dispatch(setTableData(month, unit, json))
        })
        .catch( err => {
            dispatch(endRequests())
            alert("No response from back-end server") 
        });

    };

}



