import React,{useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,SafeAreaView,AsyncStorage} from 'react-native'
import NavigationService from '../../navigation/NavigationService.js'
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base'
import {Screens} from '../../constants/index.js'
import Images from '../../constants/image.js'
import Texts from '../../constants/texts.js'
import styles from './styles'
import  storage from '../../helpers/StorageHelper'

class UserType extends React.Component{

   constructor(props){
     super(props)


   }
   componentDidMount(){  
       this.props.InitData();
    }
   
   onNavigate = (type) =>{  
        this.props.userType(type);
        if(type ==='viewer'){
          
          NavigationService.navigate(Screens.PaidEvent) 
        }
        else{
          NavigationService.navigate(Screens.MyEvent) 
        }
          
    }

  render(){

    return(
      <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>
          <View style={styles.logoArea}>
             <Image style={styles.imageLogo} source={Images.Logo}/>
          </View>
          <View style={styles.logoTitleArea}>
            <Image style={styles.imageSDLive} source={Images.SDLive}/>
            <Text style={styles.logoTitle}>Bringing live events home</Text>
          </View>
          <View style={styles.userTypeView}>
            <Text style={styles.userTypeTitle}>Please Select User Type</Text>
          </View>
          <View style={styles.loginInfoArea}>
            <TouchableOpacity
              onPress={()=>this.onNavigate('viewer')}
            >
               <View style={styles.viewerView}>
                 <Text style={styles.viewerText}>
                    Viewer
                 </Text>    
               </View>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>this.onNavigate('performer')}
             
              >
              <LinearGradient 
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 1}} 
              colors={['#7d47b7', '#90b2df']} 
              style={styles.linearGradient}>   
                 <Text style={styles.performText}>
                    Performer
                 </Text>              
              </LinearGradient>
              </TouchableOpacity>
          </View> 
      </View>
  </ScrollView>
      
  )
  }
}

const mapDispatchToProps =dispatch =>{
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(null,mapDispatchToProps)(UserType);