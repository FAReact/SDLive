import React ,{useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,Platform,Modal} from 'react-native'
import {Icon,Content} from 'native-base'
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-crop-picker';
import { AsyncStorage } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MultiCountryPicker from '../../components/MultiCountryPicker'
import MultiCityPicker from '../../components/MultiCityPicker'
import MultiInterest from '../../components/MultiInterest'
import Header from '../../components/Header'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../utils/screens';
import{ProfileURL} from '../../api/Endpoint'
import {getItem} from '../../helpers/StorageHelper'
import {ENDPOINT} from '../../api/Endpoint'
const socials=[
    {
        title:'Facebook',
        path:'http;//www.facebook.com/profilename'
    },
    {
        title:'Twitter',
        path:'http;//www.twiiter.com/profilename'
    },
    {
        title:'Instagram',
        path:'http;//www.Instagram.com/profilename'
    }
]

const Profile = (props) =>{

    const [name,setName] = useState('JOHDE');
    const [email, setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [Rpassword,setRpassword] = useState('');
    const [bio,setBio] = useState('');
    const [interest,setInterest] = useState([]);
    const [facebook,setFacebook] = useState('');
    const [twitter,setTwitter] = useState('');
    const [instagram,setInstagram] = useState('');
    const [photo,setPhoto] = useState({})
    const [country,setCountry]= useState('');
    const [city,setCity] = useState('')
    const [banner,setBanner] = useState({})
    const [date, setDate] = useState(new Date());
    const [avatar, setAvatar]=useState(null);
    const [modal,setModal] = useState(false);
  

    const openGalleryForProfile = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
              console.log(image)
              const {path}=image
              setPhoto({
                uri:path,
                type:'image/jpeg',
                name:'photo.jpg' 
            })
            setAvatar(path)
          });
    }

   const openGalleryForBanner = () =>{
    ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true
      }).then(image => {
          console.log(image)
          const {path}=image
         
          setBanner({
            uri:path,
            type:'image/jpeg',
            name:'banner.jpg' 
        })
         
      });
   }
  
   const onSetCountry = (value) =>{
       setCountry(value);
   }
   const onSetCity = (value) =>{
       setCity(value);

   }
   const onInterest = (value) =>{
    
       setInterest(value)
   }

   const onSubmitProfile =async () =>{
      
     if(password.trim() !== Rpassword.trim()) return alert('Please match the password!')
     const form = new FormData();
     form.append('name',name.trim());
     form.append('image',photo);
     form.append('email',email);
     form.append('password',password);
     form.append('birthday',date);
     form.append('country',country);
     form.append('city',city);
     form.append('bio',bio);
     form.append('interests',interest);
     form.append('facebook',facebook);
     form.append('twitter',twitter);
     form.append('instagram',instagram);
     form.append('profile_picture',banner);
     const token=await AsyncStorage.getItem('token')
     console.log(token)
        axios.post(`${ENDPOINT}/user/update_profile`,form,{
            headers: {
                'content-type': 'multipart/form-data',
                'authorization':`Bearer ${token}`
            },
        })
        .then(res =>{
            console.log('success',res)
            setModal(true)
        })
        .catch(error=>{
            console.log('error',error)
            alert('Network issue! please try later again.')
        })
   
   // props.profileUpgrade(name,photo,email,password,date,country,city,bio,interest,facebook,twitter,instagram,banner);

   }
  
    return(
        <View>
            <Header title="MANAGE PROFILE" toggleDrawer={props.navigation.toggleDrawer}/>
            <ScrollView style={styles.profileScrollview}>
                <View style={styles.profileContainer}>
                     <View style={styles.profileImageView}>
                        <View style={styles.profileImageMainview}>
                        <TouchableOpacity
                         onPress={()=>openGalleryForProfile()}
                        >
                          <Image style={styles.profileImage} source={avatar?{uri:avatar}:Images.Jhone} />
                        </TouchableOpacity>
                        <TextInput 
                        style={styles.profileName}
                        defaultValue={name}
                        onChangeText={(value)=>setName(value)}
                        /> 
                        </View>
                      </View>

                     <View style={styles.profileInfoView}>
                            <View style={styles.profileEmailView}>
                                <TextInput
                                 style={{padding:0}}
                                 placeholder="johdoe@gmail.com"
                                 onChangeText={(value)=>setEmail(value)}
                                />
                            </View>
                         <View style={styles.profilePasswordView}>
                            <View style={styles.profilePassword}>
                                <TextInput
                                style={{padding:0}}
                                placeholder="Enter New Password"
                                onChangeText={(value)=>setPassword(value)}
                                />
                            </View>
                            <View style={styles.profilePassword}>
                                <TextInput
                                 style={{padding:0}}
                                 placeholder="Re-Enter Password"
                                 onChangeText={(value)=>setRpassword(value)}
                                 />
                            </View>
                         </View>
                        <View style={{borderBottomWidth:1}}>
                            <DatePicker
                                style={{width: '100%'}}
                                date={date}
                                onDateChange={setDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={true}
                                customStyles={{
                                dateInput: {
                                    borderWidth:0,
                                    alignItems:'flex-start'                                      
                                  }
                                }
                                
                                }
                                iconComponent={
                                    <Icon name='date' type='Fontisto' style={{fontSize:25,color:'#7D47B7'}}/>
                                }
                            />
                        </View>   
                        <View style={styles.profileMultiCityCountryView}>
                            <View style={styles.profileCountryCity}>
                              <MultiCountryPicker onSetCountry={value=>onSetCountry(value)}/>
                            </View>
                            <View style={styles.profileCountryCity}>
                              <MultiCityPicker onSetCity = {value =>onSetCity(value)}/>
                            </View>
                          
                        </View>    
                            <View style={styles.profileBioView}>
                                <Text style={{color:'gray'}}>BIO</Text>
                                <View>
                                <TextInput
                                    style={{ height: 100,color:'gray', borderColor: 'black', borderWidth: 1 ,padding:5,borderRadius:10}}
                                    onChangeText={text => setBio(text)}
                                    value={bio}
                                    textAlign="left"
                                    multiline
                                    numberOfLines={4}
                                    
                                    />
                                </View>
                                
                            </View>   
                            <View style={{marginTop:10,marginBottom:5}}>
                               <Text style={{color:'gray'}}>INTERESTS</Text>  
                               <View style={{marginTop:5}}>
                                 <MultiInterest  placeHolderTitle="Interest" onInterest= {value=>onInterest(value)}/>
                               </View>
                                
                            </View>   

                            <View>
                              <Text style={{color:'gray'}}>SOCIAL MEDIA</Text>
                               <View style={{marginTop:10}}>
                                   
                                           <View style={{flexDirection:'row'}}>
                                               <Text style={{color:'gray',marginTop:7}}>Facebook</Text>
                                               <View style={{borderBottomWidth:1,marginLeft:10,width:'80%'}}>
                                                     
                                                     <TextInput 
                                                     style={{color:'gray',padding:0}}
                                                     placeholder="http;//www.facebook.com/profilename"
                                                     onChangeText={value =>setFacebook(value)}
                                                     />
                                                  
                                               
                                             </View>
                                              
                                           </View>
                                           <View style={{flexDirection:'row'}}>
                                                <Text style={{color:'gray',marginTop:7}}>Twitter</Text>  
                                                <View style={{borderBottomWidth:1,marginLeft:28,width:'80%'}}>                                             
                                                <TextInput style={{color:'gray',padding:0}}
                                                placeholder="http;//www.twiiter.com/profilename"
                                                onChangeText={value =>setTwitter(value)}
                                                />

                                               </View>
                                         </View>
                                         <View style={{flexDirection:'row'}}>
                                               <Text style={{color:'gray',marginTop:7}}>Instagram</Text>
                                               <View style={{borderBottomWidth:1,marginLeft:10,width:'80%'}}>
                                                     <TextInput 
                                                     style={{color:'gray',padding:0}}
                                                     placeholder="http;//www.Instagram.com/profilename"
                                                     onChangeText={value =>setInstagram(value)}
                                                     />
                                                  
                        
                                             </View>
                                              
                                           </View>
                               </View>    
                            </View>        
                           <View style={{marginTop:10}}>
                               <Text style={{color:'gray'}}>PEOFILE BANNER IMAGE</Text>
                               <TouchableOpacity
                               onPress={()=>openGalleryForBanner()}
                               >
                               <View style={{padding:10, borderRadius:20,borderColor:'#7d47b7',borderWidth:2,maxWidth:100,justifyContent:'center',alignItems:'center',marginTop:5}}>
                                   <Text style={{color:'#7d47b7'}}>UPLOAD</Text>
                               </View>
                               </TouchableOpacity>
                             
                           </View>
                        </View>
                    <View style={{width:'100%',alignItems:'center'}}>
                        <TouchableOpacity
                         onPress={()=>onSubmitProfile()}
                        >
                                <LinearGradient 
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 1}} 
                                colors={['#7d47b7', '#90b2df']} 
                                style={styles.linearGradient}>   
                                <Text style={styles.buttonText}>
                                  UPDATE
                                </Text>              
                                </LinearGradient>
                        </TouchableOpacity>
                    </View>
                      
                 </View>

                
             
            </ScrollView>
            <Modal
              visible={modal}
            >
    
        <View style={styles.modalContainer}>
           <View style={styles.successView}>
              <Image style={{width:140,height:140}} source={Images.SuccessImage}/>
              <Text style={styles.regTitle}>Profile Updated Successfully</Text>
           </View>
          
           <TouchableOpacity
             onPress={()=>NavigationService.navigate(Screens.PerformProfile)}
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
    )

}

const mapStateToProps =()=>{
     return{
         
     }
}
const mapDispatchToProps =dispatch=>{
    return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);