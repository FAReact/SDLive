import React,{useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import {View,Text,TouchableOpacity,Image,TextInput}from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import {Icon,Badge} from 'native-base'
import Header from '../../components/Header'
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'
import Images from '../../constants/image'
import Screens from '../../utils/screens'
import {ENDPOINT} from '../../api/Endpoint'

class GiftTicket extends React.Component{
   
    constructor(props){
      super(props);
        this.state={
             value:1,
             headerTitle:'GIFT TICKETS',
             email:'',
             event:this.props.navigation.getParam('item')
             
        }
    }
    
    setValue =(value)=>{
       this.setState({value:value});
    }
   onSendGiftTicket(){
        const {value,email ,event} = this.state
        this.props.sendTicketGift(event.id,email,value);
        if(this.props.SendTG.data.status === 'success'){
          alert(this.props.SendTG.data.msg)
        }
        else{
          alert('Network issue! please try later again.')
        }

   }
  render(){
         const {value,email ,event} = this.state
    return(
       <View>
          <Header title={this.state.headerTitle} toggleDrawer={this.props.navigation.toggleDrawer}/>
        <View style={{padding:20,marginTop:100}}>
            <View style={styles.availableTicketTitleView}>
               <Text style={styles.availableTicketTitle}>10 TICKETS AVAILABLE</Text>
            </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
        <Image source={event.image !==null?{uri:`${ENDPOINT}/${event.image}`}:Images.Concert} style={{width:90,height:90,borderRadius:10}}/>
        <View style={{marginLeft:10}}>
             <Text style={styles.eventName} >{event.name}</Text>
            <View style={{flexDirection:'row'}}>
             <Text style={styles.eventTitle}>DATE:</Text>
             <Text style={styles.eventTitle}>MAY 21</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Text style={styles.eventTitle}>TIME:</Text>
             <Text style={styles.eventTitle}>05:30 PM GMT</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Text style={styles.eventTitle}>TICKETS LEFT:</Text>
    <Text style={styles.eventTitle}>{event.ticket_count}</Text>
            </View>
           
        </View>
        <View style={{alignItems:'center',marginLeft:10}}>
        <View style={{flexDirection:'row'}}>
                 <Text style={styles.price}>$</Text>
                 <Text style={styles.price}>{event.price}</Text>
               </View>
        <View style={{padding:5,backgroundColor:'gray',borderRadius:20,alignItems:'center'}}>
           <Text style={{color:'white',fontSize:10,minWidth:70,textAlign:'center',fontFamily:'FranklinGothic-Light'}}>VIEW DETAIL</Text>
         </View>
        </View>
        </View>
        <View style={styles.infoView}>
            <Text style={styles.textInfo}>Please enter email address of the user you want to gift Tickets</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(value)=>this.setState({email:value.trim()})}
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
                onPress={()=>this.onSendGiftTicket()}
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

const mapStateToProps =({sendTG})=>{
  return{
    SendTG:sendTG
  }
}

const mapDispatchToProps = dispatch =>{
   
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(GiftTicket);