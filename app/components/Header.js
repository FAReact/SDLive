import React from 'react'
import {View,Text,TouchableOpacity,Image, NativeAppEventEmitter} from 'react-native'
import NavigationService from '../navigation/NavigationService'
import {Icon,Badge} from 'native-base'
import styles from './styles/headerStyles'
import Images from '../constants/image'
import Screens from '../utils/screens'
const Header =({title,toggleDrawer})=>{
 
    return(
        <View style={styles.headerContainer}>
          
            <View style={styles.eventNameView}>

            <TouchableOpacity
              onPress={()=>toggleDrawer()}
            >
                <Icon name="menu" type="Entypo" style={styles.menuIcon}/>
            </TouchableOpacity>
                <View style={styles.eventTitleView}>
                   <Text style={styles.eventTitle}>{title}</Text>
                </View>
         
                 <View style={{flexDirection:'row'}}>
                <Icon name='bell' type='EvilIcons' style={{fontSize:30,color:'white',marginRight:10}}/>
                    <Badge
                    style={{width:20,height:20,position:'absolute',right:4}}
                    >
                    <Text style={{color:'white'}}>2</Text>
                    </Badge>
                    </View>  
            </View>
            
        </View>
    )

}

export default Header;