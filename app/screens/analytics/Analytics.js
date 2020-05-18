import React ,{useState} from 'react'

import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,FlatList} from 'react-native'
import Header from '../../components/Header'
import NavigationService from '../../navigation/NavigationService'
import styles from './styles'
import Images from '../../constants/image'

class Analytics extends React.Component{
 
    constructor(props){
        super(props)
        this.state={
            title:"ANALYTICS"
        }
    }

    render(){
        const{title}=this.state
        return(
            <View>
                <Header title={title} toggleDrawer={this.props.navigation.toggleDrawer}/>
                
            </View>
        )
    }
}

export default Analytics;