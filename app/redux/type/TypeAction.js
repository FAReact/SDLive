import {ActionTypes} from '../ActionTypes'

export const userType =(type)=>{
    return dispatch =>{
      dispatch({type:ActionTypes.TYPE_START})
      dispatch({type:ActionTypes.TYPE_SUCCESS,payload:type})
    }
  }