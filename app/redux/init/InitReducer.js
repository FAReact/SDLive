import { ActionTypes } from '../ActionTypes'
const defaultInitData = {
  
    events:[],
    categories:[],
    myEvents:[]
    
}

export const InitReducer =(
   
    state={
        data:defaultInitData
    },
    action
)=>{
   switch(action.type){
      
      case ActionTypes.INIT_DATA_START:
          return{
              ...state
          }
      case ActionTypes.INIT_DATA_SUCCESS:
          console.log(action.payload)
          return {
              ...state,
              data:action.payload
          }
      case ActionTypes.INIT_DATA_FAIL:
          return{
              ...state,
              errorMessage:action.payload
          }
    default:
            return state
   }

}
