import React from 'react'
import {View, SafeAreaView, Text,Image, ImageBackground, StatusBar,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'
import Images from '../constants/image.js'
import styles from './styles/performTabControlStyle.js'


const PerfomTabControl = ({Tab,onTablClick}) =>{
 
    console.log(Tab);
 return(
    <View style={styles.tabContainer}>
        <TouchableOpacity
         onPress={()=>onTablClick&&onTablClick(1)}
         >
          <Icon name="play" type="AntDesign" style={[styles.playIcon,{color:Tab ==1?'#7D47B7':'gray'}]}/>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>onTablClick&&onTablClick(2)}
        >
          <Icon name="appstore1" type="AntDesign" style={[styles.playIcon,{color:Tab ==2?'#7D47B7':'gray'}]}/>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>onTablClick&&onTablClick(3)}
        >
           <Icon name="info-with-circle" type="Entypo" style={[styles.playIcon,{color:Tab ==3?'#7D47B7':'gray'}]}/>     
        </TouchableOpacity>
    </View>

    )
    
}

export default PerfomTabControl;