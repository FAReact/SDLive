
import React ,{useState} from 'react'

import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,FlatList} from 'react-native'
import {Icon} from 'native-base'
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screens';
import Header from '../../components/Header'
import Images from '../../constants/image'
import styles from './styles'

const PaymentMethod = ({navigation}) =>{
   
    return(
        <View style={styles.paymentContainer }>
            <Header title="PAYMENT METHOD" toggleDrawer={navigation.toggleDrawer}/>
            <View style={styles.paymentView}>
                <Text style={styles.title}>Please Select Your Payment Method</Text>
                <View style={styles.payment}>
                    <TouchableOpacity
                      onPress={()=>NavigationService.navigate(Screens.ManagePayment)}
                    >
                            <View style={styles.card}>
                                <Text style={{color:'#7d47b7'}}>Card</Text>
                            </View>
                    </TouchableOpacity>
               
                    <TouchableOpacity>
                                <LinearGradient 
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 1}} 
                                colors={['#7d47b7', '#90b2df']}
                                style={styles.paypal}>   
                                <Text style={{color:'white'}}>
                                  PayPal
                                </Text>              
                                </LinearGradient>
                        </TouchableOpacity>
        
                </View>
            </View>
        </View>
    )

}

export default PaymentMethod;

