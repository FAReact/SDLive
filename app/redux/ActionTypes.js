export const ActionTypes={

   //--------------Login Action Types---------------///
   LOGIN_USER_START: 'LOGIN_USER_START',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
   LOGIN_USER_FAIL: 'LOGIN_USER_FAIL',
   AUTO_LOGIN_SUCCESS: 'AUTO_LOGIN_SUCCESS',
   LOG_OUT: 'LOG_OUT',
   //--------------Signup Action Types---------------///

   //--------------Init Data Action Types---------------///
   INIT_DATA_START:'INIT_DATA_START',
   INIT_DATA_SUCCESS:'INIT_DATA_SUCCESS',
   INIT_DATA_FAIL:'INIT_DATA_FAIL',

   //--------------Init Data Action Types---------------///
   PROFILE_USER_START:'PROFILE_USER_START',
   PROFILE_USER_SUCCESS:'PROFILE_USER_SUCCESS',
   PROFILE_USER_FAIL:'PROFILE_USER_FAIL',

   //------------Type Action ------------------------//
   TYPE_START:'TYPE_START',
   TYPE_SUCCESS:'TYPE_SUCCESS',
   TYPE_FAIL:'TYPE_FAIL',

    //------------Create Event Action ------------------------//
    CREAT_EVENT_START:'CREAT_EVENT_START',
    CREAT_EVENT_SUCCESS:'CREAT_EVENT_SUCCESS',
    CREAT_EVENT_FAIL:'TYPE_CREAT_EVENT_FAIL',

      //------------Get Event Action ------------------------//
     GET_EVENT_START:'GET_EVENT_START',
     GET_EVENT_SUCCESS:'GET_EVENT_SUCCESS',
     GET_EVENT_FAIL:'GET_EVENT_FAIL',
     REMOVE_EVENT:'REMOVE_EVENT',

      //------------Ticket Action ------------------------//
      TICKET_BUY_START:'TICKET_BUY_START',
      TICKET_BUY_SUCCESS:'TICKET_BUY_SUCCESS',
      TICKET_BUY_FAIL:'TICKET_BUY_FAIL',

      //------------Send Ticket&Gift Action ------------------------//
      TG_SEND_START:'TG_SEND_START',
      TG_SEND_SUCCESS:'TG_SEND_SUCCESS',
      TG_SEND_FAIL:'TG_SEND_FAIL'
}