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

