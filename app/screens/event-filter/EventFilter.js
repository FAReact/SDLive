import React from 'react'
import {View,Text,TouchableOpacity}from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import {Icon,Badge} from 'native-base'
import styles from './styles'

const EventFilter = () =>{
 
    return(
        <View style={styles.paidContainer}>
            <View style={styles.paidHeaderView}>
            <TouchableOpacity onPress={()=>NavigationService.goBack()}>
             <Icon name="arrowleft" type="AntDesign" style={{color:'white',fontSize:22,marginLeft:10}}/>
            </TouchableOpacity>
            </View>
            <View style={styles.paidTitleView}>
                <Text style={styles.paidTitle}>EVENT FILTER</Text>
            </View>
            
        </View>
    )

}

export default EventFilter;