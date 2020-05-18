import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,SafeAreaView} from 'react-native'
import NavigationService from '../../navigation/NavigationService.js'
import {Icon} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import {Screens} from '../../constants/index.js'
import Images from '../../constants/image.js'
import Texts from '../../constants/texts.js'
import styles from './styles'


const validemail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Uername should be email format.' : undefined
const ForgotPassword = ({props})=>{
    const [loginInfo,setLoginInfo]=useState({
        email:'',
        password:''
    })
    const {email, password}=loginInfo
  const AppRecover =()=>{
    if (email === '') return alert('Please confrim email!')
    if (validemail(email.trim()) !== undefined) return alert(validemail(email))
    NavigationService.navigate(Screens.Login);
   }
    return(
    <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
            <View style={styles.logoArea}>
               <Image style={styles.imageLogo} source={Images.Logo}/>
            </View>
            <View style={styles.logoTitleArea}>
              <Image style={styles.imageSDLive} source={Images.SDLive}/>
              <Text style={styles.logoTitle}>{Texts.logoTitle}</Text>
            </View>
            <View style={styles.loginInfoArea}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:30}}>
                 <Text style={styles.description}>Please Enter your email address</Text>
                 </View> 
               
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  textAlign="left"
                  onChangeText={(text)=>setLoginInfo({email:text, password})}
                  />
                   <ImageBackground
                    style={styles.iconBackground}                    
                    source={Images.IconBack} >
                    <Icon name="email" type="Entypo" style={styles.emailIcon}/>
                   </ImageBackground>                
                </View>
               
          
              
              <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={()=>AppRecover()}
              >
                <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#7d47b7', '#90b2df']} 
                style={styles.linearGradient}>   
                   <Text style={styles.buttonText}>
                      Recover
                   </Text>              
                </LinearGradient>
                </TouchableOpacity>
                </View>
           
            </View> 
        </View>
    </ScrollView>
       
    )
}

export default ForgotPassword;