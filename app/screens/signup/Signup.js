import React,{useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox} from 'react-native'
import NavigationService from '../../navigation/NavigationService.js'
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base'
import {Screens} from '../../constants/index.js'
import Images from '../../constants/image.js'
import Texts from '../../constants/texts.js'
import styles from './styles'



 
const nameRestrict = (event) => {
    const regex = new RegExp("/^[^!-\\/:-@\\[-`{-~]+$/;");  
    const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);  
    if (!regex.test(key)) {  
    event.preventDefault(); return false;  
    }  
  }


const validemail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email address should be email format.' : undefined
const vaildfullName = value =>
    /^\d+$/.test(value) ? 'Full name can not contain numbers only alphabets and spaces.' : undefined

const formatDate =(string)=>{
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
  }
const SignUp = (props)=>{
  
   const[userInfo,setUserInfo]=useState({
    fullName:'',
    birthday:'',
    email:'',
    password:'',
    userType:props.navigation.getParam('type')?props.navigation.getParam('type'):''
   })
 
   const [date, setDate] = useState(null);
   const {fullName,birthday,email,password,userType} = userInfo;
   const [modal,setModal] = useState(false);
   
      const AppSignUp =()=>{
         console.log(props.UserInfo.loginCompleted)
        if (fullName ==='' || password === '' || email === '') return alert('Please confrim your informations!')
        if (vaildfullName(fullName.trim()) !== undefined) return alert(vaildfullName(fullName)) 
        if (validemail(email.trim()) !== undefined) return alert(validemail(email))
        if (password.length < 6) return alert('Must be at least min=6 characters')
        if(password.length && password.length > 15) return alert('Must be max=15 characters or less.')
        if(date ===null) return alert('Please confrim your birthday')
        props.signUpUser(fullName,email,date.toString(),userType,password)
        if(props.UserInfo.loginCompleted){
          setModal(true)
        }
        else{
          alert(props.UserInfo.errorMessage)
        }
       
      }
    
      const goEventPage = () =>{
        setModal(false);
        NavigationService.navigate(Screens.UserType);
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
                  placeholder="Full Name"
                  autoCompleteType={'name'}
                 // onKeyPress={nameRestrict}
                  onChangeText={(fullname)=>setUserInfo({fullName:fullname,birthday,email,password})}
                  />
                   <ImageBackground
                    style={styles.iconBackground}                    
                    source={Images.IconBack} >
                    <Image style={styles.icon} source={Images.ProfileIcon}/>
                   </ImageBackground>                
                </View>
                <View style={styles.textInputBackground}>
                
                  <DatePicker
                    style={styles.datePicker}
                    date={date}
                    onDateChange={setDate}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    placeholder="Select Date of Birth"
                    
                    customStyles={{
                      dateInput: {
                        borderWidth:0, 
                        alignItems:'flex-start',
                                                          
                      },
                      dateText: {
                        fontSize: 13,
                        color: '#969696',
                      
                        fontFamily:'FranklinGothic-Light',
                    },
                     placeholderText:{
                      color: '#969696',
                      fontSize: 13,
                      fontFamily:'FranklinGothic-Light',
                      
                     }

                    }                     
                    }
                  />
                
                   <ImageBackground
                    style={styles.iconBackground}                
                    source={Images.IconBack} >
                     <Icon name='date' type='Fontisto' style={styles.emailIcon}/>
                   </ImageBackground>                
                </View>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Email Address"
                  onChangeText={(email)=>setUserInfo({fullName,birthday,email:email,password})}
                  />
                   <ImageBackground
                    style={styles.iconBackground}                    
                    source={Images.IconBack} >
                    <Icon name="email" type="Entypo" style={styles.emailIcon}/>
                   </ImageBackground>                
                </View>
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(password)=>setUserInfo({fullName,birthday,email,password:password})}
                  />
                   <ImageBackground
                    style={styles.iconBackground}                  
                    source={Images.IconBack} >
                    <Image style={styles.icon} source={Images.LockIcon}/>
                   </ImageBackground>
                 
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
                
                 {/* <Text style={{color:"gray"}}>I Agree to the Terms and Confditions</Text> */}
               </View>
               <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={()=>AppSignUp()}
              >
                <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#7d47b7', '#90b2df']} 
                style={styles.linearGradient}>   
                   <Text style={styles.buttonText}>
                       SignUp
                   </Text>              
                </LinearGradient>
                </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Text style={styles.memberText}>Already a member?</Text>
                 <TouchableOpacity 
                  onPress={()=>NavigationService.navigate(Screens.Login)}
                 >
                   <Text style={styles.memberText}>Click here to Sign In</Text>
                 </TouchableOpacity>
               </View>
            </View> 
            <Modal
              visible={modal}
            >
    
              <View style={styles.modalContainer}>
           <View style={styles.successView}>
              <Image style={{width:140,height:140}} source={Images.SuccessImage}/>
              <Text style={styles.regTitle}>Registered Successfully!</Text>
           </View>
          
           <TouchableOpacity
             onPress={()=>goEventPage()}
             style={{width:'100%',alignItems:'center',marginTop:20}}
              >  
            
              <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#7d47b7', '#90b2df']} 
                style={styles.linearGradient}>   
                   <Text style={styles.buttonText}>
                       OK
                   </Text>              
                </LinearGradient>
           
               
              
              </TouchableOpacity>
          
        </View>
            
            </Modal>
       
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

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);