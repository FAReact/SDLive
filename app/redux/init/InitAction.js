import {ActionTypes} from '../ActionTypes'
import * as Services from '../../api/index'
import { AsyncStorage } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screens'
import setAuthToken from "../../utils/setAuthToken";

  export const InitData = () =>{

      return dispatch =>{
        dispatch({type:ActionTypes.INIT_DATA_START})
         Services.initData().then((data)=>{
           console.log(data)
           dispatch({type:ActionTypes.INIT_DATA_SUCCESS,payload:data})
         })
         .catch((errMsg)=>{
           console.log(errMsg) 
           dispatch({type:ActionTypes.INIT_DATA_FAIL,payload:errMsg})
        })
      }
  }

