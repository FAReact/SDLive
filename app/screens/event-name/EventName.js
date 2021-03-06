import React from 'react'

import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'
import Header from '../../components/Header'
import styles from './styles'
import Images from '../../constants/image'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screens'

class EventName extends React.Component{
   
    constructor(props){
        super(props)
        this.state={
            event:props.navigation.getParam('item'),
        }
    }
    render(){
        const {event} =this.state
        console.log(event)
        return(
            <View style={styles.eventContentContainer}>
                <Header title={event.name} toggleDrawer={this.props.navigation.toggleDrawer}/>
                <ScrollView>
                    <View style={styles.timeView}>
                     <Text style={styles.timeTitle}>{event.time}</Text>
                    </View>
                    <View style={styles.showTimeView}>
                          <View style={styles.showTime}>
                              <View>
                              <Text style={styles.showTimeTitle}>SHOW TIME:  10 Days</Text>
                              <View style={{flexDirection:'row'}}>
                                 <Text style={styles.showTimeTitle}>TICKETS LEFT: </Text>
                                  <Text style={styles.showTimeTitle} >{event.ticket_count}</Text>
                              </View>
                            
                              </View>
            
                          </View>
                          <View style={styles.socialView}> 
                             <Text style={styles.socialTitle}>SOCIAL SHARE</Text>
                             <View style={styles.socialIconView}>
                                 <Icon name='facebook-with-circle' type='Entypo' style={styles.socialIcon}/>
                                 <Icon name='google--with-circle' type='Entypo' style={styles.socialIcon}/>
                                 <Icon name='linkedin-with-circle' type='Entypo' style={styles.socialIcon}/>
                                 <Icon name='twitter-with-circle' type='Entypo' style={styles.socialIcon}/>
                                 <Icon name='instagram-with-circle' type='Entypo' style={styles.socialIcon}/>
                             </View>
    
                          </View>
                    </View>
                    <View style={styles.performerView}>
                        <View style={styles.performer}>
                            <Text style={styles.mainTitle}>PERFORMER</Text>
                           <View style={styles.performerImageView}>
                               <TouchableOpacity
                                style={{flexDirection:'row',alignItems:'center'}}
                                onPress={()=>NavigationService.navigate(Screens.PerformProfile)}
                               >
                               <Image style={styles.performerImage} source={Images.ProfileImage}/>
                               <Text style={styles.title}>DEV STRAW TECHNOLOGY, MUSIC,FILM, SCIENCE</Text>
                               </TouchableOpacity>
                           </View>
     
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.mainTitle}>CATEGORY</Text>
                            <View style={{marginTop:19}}>
                            <Text style={styles.title}>TRANCE MUSIC</Text>
                            </View>
                        </View>
                       
                    </View>
                    <View style={{width:'100%',flexDirection:'row'}}>
                            <View style={{width:'50%',justifyContent:'center',alignItems:'center',backgroundColor:'#707070',padding:10}}>
                              <TouchableOpacity>
                                 <Text style={{color:'white'}}>EVENT INFORMATION</Text>
                              </TouchableOpacity>  
                            </View>                        
                            <View style={{width:'50%',justifyContent:'center',alignItems:'center',backgroundColor:'#8885CE',padding:10}}>
                               <TouchableOpacity
                                onPress={()=>NavigationService.navigate(Screens.Tickets,{'event':event})}
                               >
                                  <Text style={{color:'white'}}>BUY TICKETS</Text>
                               </TouchableOpacity>
                            </View>
                    </View>
                    <View style={{width:'100%',padding:10}}>
                       <Text style={styles.description}>{event.description}</Text>
                    </View>
                </ScrollView>
              
            </View>
        )
    }

   
}

export default EventName;