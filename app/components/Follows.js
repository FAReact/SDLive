import React from 'react'
import {View, SafeAreaView, Text,Image, ImageBackground, StatusBar} from 'react-native'
import {Icon} from 'native-base'
import Images from '../constants/image.js'
import styles from './styles/followStyle.js'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Follow = () =>{

 return(
    <View style={styles.followContainer}>
        <View style={styles.concertArea}>
            <View/>
            <View style={styles.concertView}>
             <Text style={styles.title}>231</Text>
             <Text style={styles.subscribe}>EVENTS ATTENDED</Text>
            </View>
         
        </View>
        <View style={styles.followArea}>
              <View style={styles.followView}>
              <Text style={styles.title}>231</Text>
              <Text style={styles.subscribe}>SUBSCRIBED</Text>
              </View>
        </View>
    </View>
    )
}

export default Follow;