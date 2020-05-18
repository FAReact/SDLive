import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'
import NavigationService from '../navigation/NavigationService'
import LinearGradient from 'react-native-linear-gradient';
import Screens from '../utils/screens.js'
import styles from './styles/successStyle'

const SuccessComponent = ({title}) =>{
 
     
    return(
        
        <View style={styles.successContainer}>
           <View style={styles.successView}>
              <Icon name='downcircle' type='AntDesign' style={styles.successIcon}/>
                  <Text style={styles.regTitle}>Card Information Added Successfully</Text>
           </View>
           <View style={{justifyContent:'center',width:'100%',alignItems:'center',marginTop:20}}>
           <TouchableOpacity
             onPress={()=>NavigationService.goBack()}
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

export default SuccessComponent;