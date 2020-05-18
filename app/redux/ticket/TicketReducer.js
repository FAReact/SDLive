import { ActionTypes } from '../ActionTypes'


const defaultData={
    data:null,
}

export const TicketReducer = (state={
    data :defaultData,
    buy_now:false,
    errorMsg:null
},action)=>{
    switch(action.type){
        case ActionTypes.TICKET_BUY_START:
            return{
                ...state,
                buy_now:false
            }
        case ActionTypes.TICKET_BUY_SUCCESS:
            return{
                ...state,
                data:action.payload
            }
        case ActionTypes.TICKET_BUY_FAIL:
            return{
                ...state,
                errorMsg:action.payload
            }
          default:
             return state
        }
}