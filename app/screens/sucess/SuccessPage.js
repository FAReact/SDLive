import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import {Icon} from 'native-base'
import NavigationService from '../../navigation/NavigationService'
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../constants/image'
import Screens from '../../utils/screens'
import styles from './styles'

const SuccessPage = () =>{
 
     
    return(
        
        <View style={styles.successContainer}>
           <View style={styles.successView}>
              <Image style={{width:140,height:140}} source={Images.SuccessImage}/>
              <Text style={styles.regTitle}>Registered Successfully!</Text>
           </View>
           <View style={{justifyContent:'center',width:'100%',alignItems:'center',marginTop:20}}>
           <TouchableOpacity
             onPress={()=>NavigationService.navigate(Screens.PaidEvent)}
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
        </View>

    )

}

export default SuccessPage;