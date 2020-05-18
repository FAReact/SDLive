
import React ,{useState} from 'react'

import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,FlatList,Modal} from 'react-native'
import {Icon} from 'native-base'
import DatePicker from 'react-native-datepicker'
import CreditCard from 'react-native-credit-card';
import LinearGradient from 'react-native-linear-gradient';
import TextInputMask from 'react-native-text-input-mask';
import NavigationService from '../../navigation/NavigationService'
import Header from '../../components/Header'
import Images from '../../constants/image'
import styles from './styles'
import Screens from '../../utils/screens';

const WithDrawEarning = ({navigation}) =>{
    const [modal,setModal] = useState(false);
   
    
    return(
        <View style={styles.paymentContainer}>
            <Header title="WITHDRAW EARNINGS" toggleDrawer={navigation.toggleDrawer}/>
           <View style={styles.cardContainer} >
               <View style={styles.cardInfoTitleView} >
                 <Text style={styles.cardInfoTitle}>ACCOUNT INFORMATION</Text>
               </View>
               <View style={styles.cardHolderView}>
                   <TextInput
                    placeholder="ACCOUNT TITLE"
                    style={{padding:5}}
                   />
               </View>
               <View style={styles.cardHolderView}>
                 <TextInput
                    style={{padding:5}}
                    placeholder="ACCOUNT NUMBER"
                    keyboardType='numeric'
                    returnKeyType="next"
                   />
               </View>
               <View style={styles.otherView}>
                   <View style={styles.expiryView}>
                       <Text style={{color:'gray',marginTop:15}}>SORT CODE</Text>
                       <View style={styles.expiry}>
                       <TextInputMask
                        keyboardType='numeric'
                        placeholder="02-03-4567"
                        style={{padding:5}}
                        mask={"[00]-[00]-[000]"}
                        />
                       </View>
                   
                   </View>
                   <View style={styles.expiryView}>
                       <Text style={{marginRight:10,color:'gray',marginTop:15}}>BANK NAME</Text>
                       <View style={styles.cvv}>
                       <TextInput
                        placeholder="BARCLAYS"
                        style={{padding:5}}
                        />
                       </View>
                   </View>
               </View>
              <View style={{width:'100%',alignItems:'center',marginTop:20}}>
              <TouchableOpacity
               onPress={()=>setModal(true)}
              >
                        <LinearGradient 
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 1}} 
                        colors={['#7d47b7', '#90b2df']}
                        style={styles.paypal}>   
                        <Text style={{color:'white'}}>
                        CONFIRM
                        </Text>              
                        </LinearGradient>
                </TouchableOpacity>
              </View>
                 
        
           </View>
        
           <Modal
              visible={modal}
            >
    
        <View style={styles.modalContainer}>
           <View style={styles.successView}>
              <Image style={{width:140,height:140}} source={Images.SuccessImage}/>
              <Text style={styles.regTitle}>Card Information Added
Successfully</Text>
           </View>
          
           <TouchableOpacity
             onPress={()=>setModal(false)}
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

export default WithDrawEarning;

