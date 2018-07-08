
import fetch from 'cross-fetch'
import {store} from '../index'
import {TreeAlgorithms} from './tree.js'
import apiurl from '../apilink'
import accountTemplate from './accounttemplate';


const access_header = "x-access-token"








export class BixitApi{



    static login(username, password){
        return fetch(apiurl + "/api/auth",{
            method: 'POST',
            body: JSON.stringify({userId: username, password: password }),
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(
            res => { 
                if(res.ok)
                    return res.json()
                else
                    throw new Error("autentication error")
            }
        );
    }



    static getTimeDim(){
        return fetch(apiurl + "/api/dim/time",{
            method: 'GET',
            body: "",
            headers:{
                [access_header]:  store.getState().auth.token
              }
        }) 
        .then(
            res => { 
                if(res.ok)
                    return res.json()
                else
                    throw new Error("cant get time data from api, server down ?")
            }
        )
        .then( 
            // convert list from API to the tree structure used in this app
            json => TreeAlgorithms.getTreeFromList(json, "id", "parentId", "", "description")            
        );
    }


    
    static getOrgUnitsDim(){
        return fetch(apiurl + "/api/dim/profitcenters",{
            method: 'GET',
            body: "",
            headers:{
                [access_header]:  store.getState().auth.token
              }
        }) 
        .then(
            res => { 
                if(res.ok)
                    return res.json()
                else
                    throw new Error("cant get org units data from api, server down ?")
            }
        )
        .then( 
            // convert list from API to the tree structure used in this app
            json => TreeAlgorithms.getTreeFromList(json, "profitCenter", "parentProfitCenter", "", "profitCenterDescription")            
        );
    }



    static getAccountsData(month, unit){
        let testData= accountTemplate;

        return new Promise((accept, reject) => {
            setTimeout(()=> accept(testData),10)            
        });
    }


}

export default BixitApi;
