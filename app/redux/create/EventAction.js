import {ActionTypes} from '../ActionTypes'
import * as Services from '../../api/index'

//Create Event Action
export const createEvent =(data)=>{
   
    return dispatch =>{
        dispatch({type:ActionTypes.CREAT_EVENT_START});
        Services.createEvent(data).then(response=>{
            console.log('event action')
            console.log(response)
        })
        .catch(errorMsg=>{
             console.log('error message')
             console.log(errorMsg)
        })
    }
}

// Get Event Action

export const getEvent = () =>{

    return dispatch =>{
        dispatch({type:ActionTypes.GET_EVENT_START});
        Services.getEvent().then(response=>{
         dispatch({type:ActionTypes.GET_EVENT_SUCCESS,payload:response})

         })
        .catch(error=>{
            console.log(error)
            dispatch({type:ActionTypes.GET_EVENT_FAIL,payload:errorMsg})
        })   
    }
}

// remove Event Action
export const removeEvent =(id) =>{
    return dispatch =>{
        Services.removeEvent(id).then(response=>{
            dispatch ({type:ActionTypes.REMOVE_EVENT,payload:id})
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
