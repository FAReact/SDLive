import {ActionTypes} from '../ActionTypes'
import * as Services from '../../api/index'
import { AsyncStorage } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screens'
import setAuthToken from "../../utils/setAuthToken";

export const loginUser = (email, password) => {
    console.log(email)
    return dispatch => {
      dispatch({ type: ActionTypes.LOGIN_USER_START })
      Services.signIn(email, password)
        .then((data) => {
    
          setAuthToken(data.accessToken)
          console.log("token")
          console.log(data.accessToken)
          AsyncStorage.setItem("token", data.accessToken)
          loginUserSuccess(dispatch, data, email, password)
        })
        .catch((errMsg) => {
          console.log(errMsg)
          loginUserFail(dispatch, 'Email or Password Incorrect!')
        })
    }
  }

export const signUpUser =(name,email,birthday,user_type,password) =>{
 
    return dispatch=>{
        dispatch({ type: ActionTypes.LOGIN_USER_START })
        Services.signUp(name,email,birthday,user_type,password)
        .then((data) => {
            setAuthToken(data.accessToken)
            console.log("token")
            console.log(data.accessToken)
            AsyncStorage.setItem("token", data.accessToken)
            dispatch({type:ActionTypes.LOGIN_USER_SUCCESS,payload:data})
        })
        .catch((errMsg) => {
            console.log({ errMsg })
            dispatch({type:ActionTypes.LOGIN_USER_FAIL,payload:errMsg})
        })
    }
}

const loginUserFail = (dispatch, errorMessage) => {
    alert(errorMessage)
    dispatch({
      type: ActionTypes.LOGIN_USER_FAIL,
      payload: {
        errorMessage: errorMessage
      }
    })
  }

const loginUserSuccess = (dispatch, data, email, password) => {
    AsyncStorage.setItem("loginCompleted", "true")
    AsyncStorage.setItem("email", email)
    AsyncStorage.setItem("password", password)
    dispatch({
      type: ActionTypes.LOGIN_USER_SUCCESS,
      payload: data
    })
    NavigationService.navigate(Screens.UserType)
  
  }

export const updateAuthDetail = (type, data) => {
    return dispatch => {
      dispatch({
        type: ActionTypes.UPDATE_AUTH_DETAIL, 
        payload: {
          type,
          data
        }
      })
    }
  }

export const logoutUser = () => {
    return dispatch => {
      dispatch({
        type: ActionTypes.LOG_OUT,
        payload: 'There was an error connection'
      })
      NavigationService.navigateAndReset(Screens.Login);
    }
  }