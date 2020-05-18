import {ActionTypes} from '../ActionTypes'

const deafultEvents=[]
export const EventReducer =(
   
    state={
        events:deafultEvents
    },
    action
)=>{
    switch(action.type){
        case ActionTypes.GET_EVENT_START:
            return{
                ...state
            }
        case ActionTypes.GET_EVENT_SUCCESS:
            return{
                ...state,
                events:action.payload.events
            }
        case ActionTypes.GET_EVENT_FAIL:
            return{
                ...state,
                errorMessage:action.payload
                }
        case ActionTypes.REMOVE_EVENT:
         
            return {
                ...state,
                events:state.events.filter((val,index)=>index !=action.payload)
            }
         default:
            return state
    }
}