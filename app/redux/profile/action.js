import {ActionTypes} from '../ActionTypes'
import * as Services from '../../api/index'


export const profileUpgrade = () =>{
  
    return dispatch =>{
        dispatch({type:ActionTypes.PROFILE_USER_START});
        Services.profileUpgrade().then(data=>{
            console.log("profile")
            console.log(data)
        })
        .catch(errorMsg=>{

        })
    }

}