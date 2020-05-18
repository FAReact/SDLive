import { ActionTypes } from '../ActionTypes'


const defaultData={
    data:null,
}

export const SendTicketGiftReducer = (state={
    data :defaultData,
    errorMsg:null
},action)=>{
    switch(action.type){
        case ActionTypes.TG_SEND_START:
            return{
                ...state,
            }
        case ActionTypes.TG_SEND_SUCCESS:
            return{
                ...state,
                data:action.payload
            }
        case ActionTypes.TG_SEND_FAIL:
            return{
                ...state,
                errorMsg:action.payload
            }
          default:
             return state
        }
}