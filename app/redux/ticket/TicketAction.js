import {ActionTypes} from '../ActionTypes'
import * as Services from '../../api/index'

export const buyTicket = (event_id,count) =>{
  
    return dispatch =>{
       dispatch({type:ActionTypes.TICKET_BUY_START});
       Services.buyTicket(event_id,count).then(data=>{
         
           if(data.status === 'success'){
             dispatch({type:ActionTypes.TICKET_BUY_SUCCESS,payload:data});
           }
           else{
               alert(data.msg)
           }
          
       }).catch(errorMsg=>{
          console.log(errorMsg)
          dispatch({type:ActionTypes.TICKET_BUY_FAIL,payload:errorMsg});
       })
    }
}


export const buyCheer = (package_id) =>{
 
    return dispatch =>{
       dispatch({type:ActionTypes.TICKET_BUY_START});
       Services.buyCheer(package_id).then(data=>{
         
           if(data.status === 'success'){
             alert(data.msg)
           }
           else{
               alert(data.msg)
           }
          
       }).catch(errorMsg=>{
          console.log(errorMsg)
          dispatch({type:ActionTypes.TICKET_BUY_FAIL,payload:errorMsg});
       })
    }
}
