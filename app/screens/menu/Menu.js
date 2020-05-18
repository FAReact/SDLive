import React,{useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/action.js'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,SafeAreaView} from 'react-native'
import NavigationService from '../../navigation/NavigationService.js'
import LinearGradient from 'react-native-linear-gradient';
import {Screens} from '../../constants/index.js'
import {Icon} from 'native-base'
import Images from '../../constants/image.js'
import Texts from '../../constants/texts.js'
import styles from './styles'
import storage from '../../helpers/StorageHelper'

const menulist=[
    {
       title:'ALL EVENTS',
       path:'PaidEvent'
    },
    // {
    //     title:'FAVOURITES LIST',
    //     path:'FavouriteList'
    // },
    {
        title:'MY BOOKED EVENTS',
        path:'BookEvent'
    },
    {
        title:'MY PROFILE',
        path:'Profile'
    },
    {
        title:'PAYMENTS SETTINGS',
        path:'PaymentMethod'
    },
    {
        title:'ABOUT',
        path:''
    },
    {
        title:'LOGOUT',
        path:'Login'
    }

]
const menuPerformlist=[
    {
       title:'MY EVENTS',
       path:'MyEvent'
    },
   
    {
        title:'CREAT NEW EVENT',
        path:'CreateEvent'
    },
    {
        title:'MANAGE PROFILE',
        path:'Profile'
    },
    {
        title:'MANAGE PAYMENTS',
        path:'PaymentMethod'
    },
    {
        title:'MY EARNING',
        path:'MyEarning'
    },
    {
        title:'SWITCH VIEWER',
        path:''
    },
    {
        title:'ABOUT',
        path:''
    },
    {
        title:'LOGOUT',
        path:'Login'
    }

]



const Menu = (props)=>{


    return(
    <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
            <View style={styles.closeContainer}>
                <TouchableOpacity
                  onPress={()=>NavigationService.goBack()}
                >
                    <Icon name='close' type='AntDesign' style={styles.closeIcon}/>
                </TouchableOpacity>
               
            </View>
            <View style={styles.logoArea}>
               <Image style={styles.imageLogo} source={Images.Logo}/>
            </View>
            <View style={styles.logoTitleArea}>
              <Image style={styles.imageSDLive} source={Images.SDLive}/>
              <Text style={styles.logoTitle}>{Texts.logoTitle}</Text>
            </View>
            <View style={styles.loginInfoArea}>
               
                {
                  
                   props.Type !==null && props.Type === 'viewer'&&(
                    menulist.map(item=>(
                        <TouchableOpacity
                         onPress={()=>NavigationService.navigate(item.path)}
                        >
                            <Text style={styles.menutitle}>{item.title}</Text>
                        </TouchableOpacity>
                      
                    ))
                   )
                  
                }

                {
                    props.Type !==null && props.Type ==='performer'&&(
                    menuPerformlist.map(item=>(
                        <TouchableOpacity
                         onPress={()=>NavigationService.navigate(item.path)}
                        >
                            <Text style={styles.menutitle}>{item.title}</Text>
                        </TouchableOpacity>
                      
                    ))
                 )
                
                }
            
            </View> 
        </View>
    </ScrollView>
       
    )
}
const mapStateToProps = ({type}) => {
    return {
        Type:type.type
    }
}
const mapDispatchToProps =dispatch =>{
    return bindActionCreators(ActionCreators,dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(Menu);