import { ActionTypes } from '../ActionTypes'

const defaultProfile = {
    name: null,
    _id: null,
    email: null,
    
  }

  export const AuthReducer =(
      state = {
          profile:defaultProfile,
          loading:false,
          loginCompleted:false,
          error:false,
          errorMessage:'',
          token:null
      },
      action
  )=>{
      switch(action.type){
          case ActionTypes.LOGIN_USER_START:
              return{
                  ...state,
                  error:false,
                  errorMessage:'',
                  loginCompleted:false
              }
          case ActionTypes.LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    loginCompleted: true,
                    // profile: action.payload.user,
                    // token: action.payload.token,
                }
          case ActionTypes.LOGIN_USER_FAIL:
                return {
                    ...state,
                    error: true,
                    loginCompleted: false,
                    errorMessage: action.payload.errorMessage
                }
           case ActionTypes.LOG_OUT:
                    return {
                        ...state,
                        error: false,
                        loginCompleted: false,
                        token: null,
                        profile: defaultProfile,
                        errorMessage: action.payload
                    }
            default:
                return state
      }
  }