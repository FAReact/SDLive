import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,SafeAreaView} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import NavigationService from '../../navigation/NavigationService.js'
import LinearGradient from 'react-native-linear-gradient';
import {Screens} from '../../constants/index.js'
import Images from '../../constants/image.js'
import Texts from '../../constants/texts.js'
import styles from './styles'


const validemail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Uername should be email format.' : undefined
const Login = (props)=>{
    const [loginInfo,setLoginInfo]=useState({
        email:'',
        password:''
    })
    const {email, password}=loginInfo
    // console.log(props)
  const AppLogin =()=>{
    if (password === '' || email === '') return alert('Please confrim email and password!')
    if (validemail(email.trim()) !== undefined) return alert(validemail(email))
    if (password.length < 6) return alert('Must be at least min=6 characters')
    if(password.length && password.length > 15) return alert('Must be max=15 characters or less.')
    props.loginUser(email.trim(),password.trim());
  
   }
    return(
    <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
            <View style={styles.logoArea}>
               <Image style={styles.imageLogo} source={Images.Logo}/>
            </View>
            <View style={styles.logoTitleArea}>
              {/* <Image style={styles.imageSDLive} source={Images.SDLive}/> */}
              <Text style={styles.logoTitle}>{Texts.logoTitle}</Text>
            </View>
            <View style={styles.loginInfoArea}>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Username"
                  textAlign="left"
                  onChangeText={(text)=>setLoginInfo({email:text, password})}
                  />
                   <ImageBackground
                    style={styles.iconBackground}                    
                    source={Images.IconBack} >
                    <Image style={styles.icon} source={Images.ProfileIcon}/>
                   </ImageBackground>                
                </View>
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  textAlign="left"
                  secureTextEntry={true}
                 
                  onChangeText={(text)=>setLoginInfo({password:text, email})}
                  />
                   <ImageBackground
                    style={styles.iconBackground}                  
                    source={Images.IconBack} >
                    <Image style={styles.icon} source={Images.LockIcon}/>
                   </ImageBackground>
                </View>
                <TouchableOpacity
                 onPress={()=>NavigationService.navigate(Screens.ForgotPassword)}
                >
                    <View style={styles.forgotView}>
                      <Text style={styles.forgotTitle}>Forgot password?</Text>
                    </View>
                </TouchableOpacity>
              
              <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={()=>AppLogin()}
              >
                <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#7d47b7', '#90b2df']} 
                style={styles.linearGradient}>   
                   <Text style={styles.buttonText}>
                      Login
                   </Text>              
                </LinearGradient>
                </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Text style={styles.description}>Want to start your Event?</Text>
                 <TouchableOpacity 
                  onPress={()=>NavigationService.navigate(Screens.SignUp)}
                 >
                 <Text style={styles.description}>Sign up, it is free!</Text>
                 </TouchableOpacity>
                 </View> 
               
            </View> 
        </View>
    </ScrollView>
       
    )
}

const mapStateToProps = ({auth}) =>{
  return{
    UserInfo:auth
  }
}
const mapDispatchToProps =dispatch =>{
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
