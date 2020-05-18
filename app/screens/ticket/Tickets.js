import React,{useState} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import {View,Text,TouchableOpacity,Image,Modal}from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import {Icon,Badge} from 'native-base'
import Header from '../../components/Header'
import MultiNumber from '../../components/MultiNumber'
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'
import Images from '../../constants/image'
import Screens from '../../utils/screens'
import {ENDPOINT} from '../../api/Endpoint'

class Tickets extends React.Component {

    constructor(props){
      super(props)
      this.state={
          value:1,
          modal:false,
          event:props.navigation.getParam('event'),
      }
    }

    buyTicketFunction (){
      const {value,modal,event} = this.state
      var event_id=event.id
      var count=value
      this.props.buyTicket(event_id,count);
       this.setState({modal:true})
      
    }
    onGoToGiftTicket(){
      const {event} = this.state
      NavigationService.navigate(Screens.GiftTicket,{'item':event})
    }
   
    render(){
      const {value,modal,event} = this.state
      return(
        <View>
          <Header title='TICKETS' toggleDrawer={this.props.navigation.toggleDrawer}/>
            <View style={{padding:20,marginTop:100}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={event.image !==null?{uri:`${ENDPOINT}/${event.image}`}:Images.Concert} style={{width:90,height:90,borderRadius:10}}/>
            <View style={{marginLeft:10}}>
               <Text style={styles.eventName}>{event.name}</Text>
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
               <View style={{flexDirection:'row',alignItems:'center',marginTop:20,justifyContent:'space-between'}}>
                   <Text style={styles.eventName}>No. of Tickets</Text>
                   <NumericInput 
                        value={value} 
                        onChange={value => this.setState({value:value})} 
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
                    onPress={()=>this.buyTicketFunction()}
                  >
                    <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#7d47b7', '#90b2df']} 
                    style={styles.linearGradient}>   
                       <Text style={styles.buttonText}>
                           BUY NOW
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
                  <Text style={styles.regTitle}>Tickets Purchased Successfully</Text>
               </View>
              
               <TouchableOpacity
                 style={{width:'100%',alignItems:'center',marginTop:20}}
                 onPress={()=>NavigationService.navigate(Screens.PaidEvent)}
                  >  
                  <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#7d47b7','#90b2df']} 
                    style={styles.linearGradientbutton}>   
                       <Text style={styles.buttonText}>
                           OK
                       </Text>              
                    </LinearGradient>
                  </TouchableOpacity>
                  <View style={styles.gifCheckView}>
                   <Text style={styles.gitTitle}>Gif Tickets to your Friends or Loved Ones</Text>
                    <TouchableOpacity
                     style={{width:'100%',alignItems:'center',marginTop:20}}
                     onPress={()=>this.onGoToGiftTicket()}
                     >  
                      <View 
                        style={styles.linearGradientGift}>   
                          <Text style={styles.gitfButton}>
                           GIFT NOW
                          </Text>              
                        </View>
                     </TouchableOpacity>
                  </View>
                </View>
               </Modal>
           
          </View>
        )
    
    }
}

const mapStateToProps =({ticket})=>{
  return{
    Ticket:ticket
  }
}

const mapDispatchToProps = dispatch =>{
   
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Tickets);