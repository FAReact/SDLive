import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action.js'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import { Icon, Badge } from 'native-base'
import Header from '../../components/Header'
import MultiNumber from '../../components/MultiNumber'
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'
import Images from '../../constants/image'
import Screens from '../../utils/screens'

class PurchaseCheer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      headerTitle: 'GIFT CHEER',
      email: '',
      UserInfo: this.props.UserInfo.profile.user
    }
  }

  setValue = (value) => {
    this.setState({ value: value });
  }

  gift = () => {
    const {email, value} = this.state
    if (value === 0) return alert('Please confrim gift count!') 
    if (email === '') return alert('Please confrim email and password!')
  }
  render() {
    const {UserInfo, value} = this.state
    return (
      <View>
        <Header title={this.state.headerTitle} toggleDrawer={this.props.navigation.toggleDrawer} />
        <View style={{ padding: 20, marginTop: 100 }}>
          <View style={styles.availableTicketTitleView}>
            <Text style={styles.availableTicketTitle}>{UserInfo.cheers} CHEERS AVAILABLE</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Image source={Images.Clapping} style={{ width: 90, height: 90, borderRadius: 10 }} />
          </View>
          <View style={styles.infoView}>
            <Text style={styles.textInfo}>Please enter email address of the user you want to gift Tickets</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              textAlign="left"
              value={this.state.email}
              onChangeText={(text)=> this.setState({email: text})}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
            <Text style={styles.eventName}>No. of Tickets to Gift</Text>
            <NumericInput
              value={value}
              onChange={value => this.setValue(value)}
              totalWidth={200}
              totalHeight={35}
              iconSize={20}
              step={1}
              valueType='real'
              minValue={0}
              maxValue={UserInfo.cheers}
              rounded
              textColor='#B0228C'
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor='#7D47B7'
              leftButtonBackgroundColor='#7D47B7' />
          </View>
          <View style={{ marginHorizontal: 30, marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => this.gift()}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#7d47b7', '#90b2df']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                  GIFT NOW
                   </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseCheer);