import React,{useState} from 'react'
import {View,Text,TouchableOpacity,Image,TextInput}from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import {Icon,Badge} from 'native-base'
import Header from '../../components/Header'
import MultiNumber from '../../components/MultiNumber'
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'
import Images from '../../constants/image'
import Screens from '../../utils/screens'
import { ScrollView } from 'react-native-gesture-handler'

class MyEarning extends React.Component{
   
    constructor(props){
        super(props)
        this.state={     
            price:506,
            headerTitle:'MY EARNINGS'
        }
    }

    render(){
         
        const {price} = this.state
        return(
            <View style={styles.myearningContainer}>
             
                <Header title={this.state.headerTitle} toggleDrawer={this.props.navigation.toggleDrawer}/>
                <ScrollView>
                <View style={styles.amountView}>
                    <Text style={styles.totalTitle}>TOTAL EARNINGS AVAILABLE</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.dollarSign}>$</Text>
                        <Text style={styles.dollarSign}>{price}</Text>
                    </View>
                 <View style={styles.withdrawButton}>
                    <TouchableOpacity
                        onPress={()=>NavigationService.navigate(Screens.WithDrawEarning)}
                    >
                    <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#7d47b7', '#90b2df']} 
                    style={styles.linearGradient}>   
                    <Text style={styles.buttonText}>
                       WITHDRAW
                    </Text>              
                    </LinearGradient>
                    </TouchableOpacity>
                 </View>
              
              </View>
              <View style={styles.amountView}>
                    <Text style={styles.totalTitle}>LAST WITHDRAW AMOUNT</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.title}>$</Text>
                        <Text style={styles.title}>86</Text>
                    </View> 
              </View>
              <View style={styles.amountView}>
                    <Text style={styles.totalTitle}>LAST WITHDRAW DATE</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.title}>30-02-2019</Text>
                    </View>
             <View style={styles.gifCheckView}>
                <TouchableOpacity
                 style={{width:'100%',alignItems:'center',marginTop:20}}
                 onPress={()=>NavigationService.navigate(Screens.Analytics)}
                 >  
                  <View 
                    style={styles.linearGradientGift}>   
                      <Text style={styles.gitfButton}>
                       VIEW ANALYTICS
                      </Text>              
                    </View>
                 </TouchableOpacity>
              </View>
              </View>
              </ScrollView>
            </View>
        )

    }


}

export default MyEarning;