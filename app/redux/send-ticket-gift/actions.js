import {ActionTypes} from '../ActionTypes'
import * as Services from '../../api/index'

export const sendTicketGift = (event_id,receiver_email,count) =>{
  
    return dispatch =>{
       dispatch({type:ActionTypes.TG_SEND_START});
       Services.sendTicketGift(event_id,receiver_email,count).then(data=>{
         
           if(data.status === 'success'){
             dispatch({type:ActionTypes.TG_SEND_SUCCESS,payload:data});
           }
           else{
               alert(data.msg)
           }
          
       }).catch(errorMsg=>{
          console.log(errorMsg)
          dispatch({type:ActionTypes.TG_SEND_FAIL,payload:errorMsg});
       })
    }
}

