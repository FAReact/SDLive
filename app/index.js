import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducer'
import NavigationService from './navigation/NavigationService.js'
import Login from './screens/login/Login.js'
import SignUp from './screens/signup/Signup.js'
import PerformProfile from './screens/perfomer/PerformerProfile.js'
import Chat from './screens/chat/Chat.js'
import PaidEvent from './screens/paidEvent/PaidEvent.js'
import Dimensions from './constants/dimensions.js'
import UserType from './screens/userType/userType.js';
import SuccessPage from './screens/sucess/SuccessPage.js';
import EventFilter from './screens/event-filter/EventFilter.js';
import EventName from './screens/event-name/EventName.js';
import Profile from './screens/profile /Profile.js';
import MyEvent from './screens/event/MyEvent.js';
import PaymentMethod from './screens/payment/PaymentMethod.js'
import ManagePayment from './screens/manage-payment/ManagePayment.js'
import SuccessComponent from './components/SuccessComponent.js'
import Tickets from './screens/ticket/Tickets.js'
import CreateEvent from './screens/create-event/CreateEvent.js'
import Menu from './screens/menu/Menu'
import ForgotPassword from './screens/forgot-password/ForgotPassword'
import BookEvent from './screens/book-event/BookEvent'
import GiftTicket from './screens/gift-ticket/GiftTicket'
import PurchaseCheer from './screens/purchase/PurchaseCheer'
import MyEarning from './screens/my-earning/MyEarning'
import WithDrawEarning from './screens/withdraw-earning/WithDrawEarning'
import Video from './screens/video-chat/Video'
import Analytics from './screens/analytics/Analytics'
import EditEvent from './screens/edit-event/EditEvent'
import ViewEvent from './screens/view-event/index'
import ReviewerProfile from './screens/reviewer/ReviewerProfile'
import About from './screens/about/index'
const MainStack = createDrawerNavigator(
    {
        UserType: { 
            screen: UserType ,
      
        },
        SuccessPage: { screen: SuccessPage },
        PaidEvent: { 
            screen: PaidEvent,

         },
        Analytics: { screen: Analytics },
        Video: { screen: Video },
        ManagePayment: { screen: ManagePayment },
        MyEvent: { 
            screen: MyEvent,
         },
        EditEvent: { screen: EditEvent },
        PerformProfile: { screen: PerformProfile },
        ReviewerProfile:{screen:ReviewerProfile},
        ViewEvent: { screen: ViewEvent },
        CreateEvent: { screen: CreateEvent },
        Profile: { screen: Profile },
        Chat: { screen: Chat },
        EventFilter: { screen: EventFilter },
        EventName: { screen: EventName },
        PaymentMethod: { screen: PaymentMethod },
        SuccessComponent: { screen: SuccessComponent },
        Tickets: { screen: Tickets },
        GiftTicket: { screen: GiftTicket },
        BookEvent: { screen: BookEvent },
        PurchaseCheer: { screen: PurchaseCheer },
        MyEarning: { screen: MyEarning },
        WithDrawEarning: {screen: WithDrawEarning},
        About: {screen: About},
    },
    
    {
        drawerWidth: Dimensions.deviceWidth * 0.8,
        contentComponent: Menu,
        defaultNavigationOptions: {
            drawerLockMode: 'locked-closed',
        }
    }
)

const AuthStack = createStackNavigator(
    {
        SignUp: { screen: SignUp },
        Login: { screen: Login },
        ForgotPassword: { screen: ForgotPassword },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: null
            }
        }
    }
   

)
const RootStack = createSwitchNavigator(
    {
        Auth: AuthStack,
        Main: MainStack,

    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: null
            }
        }
    }

)



const AppMain = () => {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    const Apps = createAppContainer(RootStack)
    return (

        <Provider store={store}>
            <Apps
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                }}
            />
        </Provider>

    )
}

export default AppMain;