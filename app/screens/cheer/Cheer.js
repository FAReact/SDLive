import React ,{useState} from 'react'

import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,FlatList} from 'react-native'
import Header from '../../components/Header'
import NavigationService from '../../navigation/NavigationService'
import styles from './styles'
import Images from '../../constants/image'
import Screens from '../../utils/screens'

const data=[
   {
       id:1,
       title:"package1",

   },
   {
       id:2,
       title:"package2"
   },
   {
       id:3,
       title:'package3'
   },
   {
       id:4,
       title:'package3'
   }

]
const CardContent = ({item}) =>{
    return(
        <View>
            <Image source={Images.Clapping}/>
           <Text style={{color:'black'}}>{item.title}</Text>
        </View>
    )
}

class Cheer extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            header:'Cheers'
         };
    }
  render(){
       
      return(
          <View>
              <Header title={this.state.header} toggleDrawer={this.props.navigation.toggleDrawer}/>
              <FlatList
               data={data}
               renderItem={({item})=>(
                   <CardContent item={item}/>
               )}
              />
          </View>
      )
  }

}
export default Cheer; 