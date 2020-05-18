import {combineReducers} from 'redux'
import {AuthReducer} from './auth/AuthReducer'
import {InitReducer} from './init/InitReducer'
import {TypeReducer} from './type/TypeReducer'
import {EventReducer} from './create/EventReducer'
import {TicketReducer} from './ticket/TicketReducer'
import {SendTicketGiftReducer} from './send-ticket-gift/reducer'
export default combineReducers(
    {
        initData:InitReducer,
        auth:AuthReducer,
        type:TypeReducer,
        event:EventReducer,
        ticket:TicketReducer   ,
        sendTG: SendTicketGiftReducer
    }
)