import React ,{useState} from 'react'

import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,FlatList} from 'react-native'
import Header from '../../components/Header'
import NavigationService from '../../navigation/NavigationService'
import styles from './styles'
import Images from '../../constants/image'
import {events} from './data.js'
import Screens from '../../utils/screens'

const buttons=[
    {
        title:"VIEW DETAIL",
        color:'#969696',
        path:'ViewEvent'

    },
    {
        title:"GIFT TICKETS",
        color:'#E2247A',
        path:'GiftTicket'

    },
    {
        title:"BUY CHEERS",
        color:'#7D47B7',
        path:'Cheer'

    },
  
]

const CardContent = (item) =>{
    return(
        <View style={{padding:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TouchableOpacity
            onPress={()=>NavigationService.navigate(Screens.Video)}
            >
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Images.Concert} style={{width:90,height:90,borderRadius:10}}/>
            <View style={{marginLeft:10}}>
                <Text style={styles.eventName} >{item.eventName}</Text>
                <View style={{flexDirection:'row'}}>
                 <Text style={styles.eventTitle}>DATE:</Text>
                 <Text style={styles.eventTitle}>{item.eventDate}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                 <Text style={styles.eventTitle}>TIME:</Text>
                 <Text style={styles.eventTitle}>{item.eventTime}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                 <Text style={styles.eventTitle}>TICKETS LEFT:</Text>
                 <Text style={styles.eventTitle}>{item.eventTicket}</Text>
                </View>
               
            </View>
            </View>
            </TouchableOpacity>
       
            <View style={{alignItems:'center'}}>
                {/* <Text style={styles.eventName}>10</Text>
                <Text style={styles.eventTitle}>TICKETS</Text> */}
               {
                   buttons.map(btnItem=>(
                    <TouchableOpacity
                     onPress={()=>NavigationService.navigate(btnItem.path,{'item':item})}
                    >
                       <View style={{padding:5,backgroundColor:btnItem.color,borderRadius:20,marginTop:5,alignItems:'center'}}>
                           <Text style={{color:'white',fontSize:10,minWidth:70,textAlign:'center',fontFamily:'FranklinGothic-Light'}}>{btnItem.title}</Text>
                       </View>
                       </TouchableOpacity>
                   ))
               }
            </View>
        </View>
    )
}


class BookEvent extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = { 
            bookHeader:'BOOKED EVENTS'
         };
    }


  render(){
       
      return(
          <View>
              <Header title={this.state.bookHeader} toggleDrawer={this.props.navigation.toggleDrawer}/>
              <FlatList
                horizontal={false}
                data={events}
                style={styles.flatlistContainer}
                keyExtractor={item => item._id}        
                renderItem={({item})=>
                <CardContent {...item}/>
             }
              />
      
          </View>
      )
  }

}
export default BookEvent; 