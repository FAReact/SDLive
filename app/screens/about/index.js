
import React, { useState } from 'react'

import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { Icon, Content } from 'native-base'
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screens';
import Header from '../../components/Header'
import Images from '../../constants/image'
import styles from './styles'

const About = ({ navigation }) => {

    return (
        <View style={styles.paymentContainer}>
            <Header title="About" toggleDrawer={navigation.toggleDrawer} />
            <Content>
                <Text style={styles.title}>About</Text>
            </Content>
        </View>
    )

}

export default About;

