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

class PurchaseCheer extends React.Component{
   
    constructor(props){
        super(props)
        this.state={
             value:1,
             headerTitle:'GIFT CHEER'
        }
    }
    
    setValue =(value)=>{
       this.setState({value:value});
    }

  render(){

    return(
       <View>
          <Header title={this.state.headerTitle} toggleDrawer={this.props.navigation.toggleDrawer}/>
        <View style={{padding:20,marginTop:100}}>
            <View style={styles.availableTicketTitleView}>
               <Text style={styles.availableTicketTitle}>500 CHEERS AVAILABLE</Text>
            </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
        <Image source={Images.Clapping} style={{width:90,height:90,borderRadius:10}}/>
        </View>
        <View style={styles.infoView}>
            <Text style={styles.textInfo}>Please enter email address of the user you want to gift Tickets</Text>
            <TextInput
              style={styles.textInput}
            />

        </View>
           <View style={{flexDirection:'row',alignItems:'center',marginTop:20,justifyContent:'space-between'}}>
               <Text style={styles.eventName}>No. of Tickets to Gift</Text>
               <NumericInput 
                    value={this.state.value} 
                    onChange={value => this.setValue(value)} 
                    totalWidth={200} 
                    totalHeight={30} 
                    iconSize={20}
                    step={1}
                    valueType='real'
                    minValue={0}
                    rounded 
                    textColor='#B0228C' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='#7D47B7' 
                    leftButtonBackgroundColor='#7D47B7'/>
           </View>
              <View style={{marginHorizontal:30,marginTop:30}}>
              <TouchableOpacity
                onPress={()=>NavigationService.navigate(Screens.PaymentMethod)}
              >
                <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#7d47b7', '#90b2df']} 
                style={styles.linearGradient}>   
                   <Text style={styles.buttonText}>
                      GIFT NOW
                   </Text>              
                </LinearGradient>
                </TouchableOpacity>
              </View>
          </View>
      </View>
        )

    }


}

export default PurchaseCheer