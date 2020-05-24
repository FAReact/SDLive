import React ,{useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action.js'
import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,FlatList} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Header from '../../components/Header'
import NavigationService from '../../navigation/NavigationService'
import styles from './styles'
import Images from '../../constants/image'
import Screens from '../../utils/screens'

const data=[
   {
       id:1,
       price:'20',
       title:"package1",


   },
   {
       id:2,
       price:'40',
       title:"package2"
   },
   {
       id:3,
       price:'60',
       title:'package3'
   },
   {
       id:4,
       price:'180',
       title:'package4'
   },
   {
    id:5,
    price:'100',
    title:'package5'
  }

]
const CardContent = ({item,onBuyCheer}) =>{

    return(
     <TouchableOpacity onPress={()=>onBuyCheer(item.id)}>
       <Card>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:5,alignItems:'center'}}>
            <Image style={{width:60,height:60}} source={Images.Clapping}/>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>$</Text>
                    <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{item.price}</Text>
                </View>
              <Text style={{color:'black',fontSize:16,color:'#969696'}}>{item.title}</Text>
            </View>
        </View>
        </Card>
     </TouchableOpacity>
    
    )
}

class Cheer extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            header:'PURCHASE CHEER'
         };
    }
   onBuyCheer(id){
      this.props.buyCheer(id);
   }
  render(){
       
      return(
    
          <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
              <Header title={this.state.header} toggleDrawer={this.props.navigation.toggleDrawer}/>
              <FlatList
               style={{paddingTop:50}}
               data={data}
               renderItem={({item})=>(
                   <CardContent item={item} onBuyCheer={()=>this.onBuyCheer(item.id)}/>
               )}
              />
          </View>
      )
  }

}


const mapStateToProps = ({ auth }) => {
    return {
        UserInfo: auth
    }
  }
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(Cheer); 