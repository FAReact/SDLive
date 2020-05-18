import { ActionTypes } from '../ActionTypes'

const defaultType = ''

export const TypeReducer =(
  state=defaultType ,action
) =>{
   switch(action.type) {
      case ActionTypes.TYPE_START:
        return {
          ...state
        }
      case ActionTypes.TYPE_SUCCESS:
         return {
              ...state,
              type:action.payload
         }

      case ActionTypes.TYPE_FAIL:
        return{
          ...state
        }
      default:
          return state
   }
}