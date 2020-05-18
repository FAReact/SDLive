import * as AuthActions from './auth/AuthActions.js';
import * as InitAction from './init/InitAction.js';
import * as ProfileAction from './profile/action.js'
import * as TypeAction from './type/TypeAction'
import * as EventAction from './create/EventAction'
import * as TicketAction from './ticket/TicketAction'
import * as SendTicketGift from './send-ticket-gift/actions'
export const ActionCreators = Object.assign({},AuthActions,InitAction,ProfileAction,TypeAction,EventAction,TicketAction,SendTicketGift)