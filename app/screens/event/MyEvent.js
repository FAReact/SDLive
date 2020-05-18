import React, { useState } from 'react'
import isEqual from 'lodash/isEqual'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/action.js'
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { Icon } from 'native-base'
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header'
import NavigationService from '../../navigation/NavigationService'
import Images from '../../constants/image'
import styles from './styles'
import { events } from './data.js'
import Screens from '../../utils/screens'
import { ENDPOINT } from '../../api/Endpoint'

const buttons = [
    {
        title: "VIEW DETAIL",
        color: '#969696',
        path: 'ViewEvent'

    },
    {
        title: "EDIT DETAIL",
        color: '#8885CE',
        path: 'EditEvent'

    },
]
const getDateFromString = (time) => {

    var date = time.substr(0, time.indexOf(' '));
    return date
}
const getTimeFromString = (time) => {
    var Time = time.substr(time.indexOf(' ') + 1)
    return Time
}

const CardContent = ({ item, onDelectItem }) => {


    return (
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.image !== null ? { uri: `${ENDPOINT}/${item.image}` } : Images.Concert} style={{ width: 90, height: 90, borderRadius: 10 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.eventName} >{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.eventTitle}>DATE:</Text>
                        <Text style={styles.eventTitle}>{item.time !== null ? getDateFromString(item.time) : ''}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: 100 }}>
                        <Text style={styles.eventTitle}>TIME:</Text>
                        <Text style={styles.eventTitle}>{item.time !== null ? getTimeFromString(item.time) : ''}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.eventTitle}>TICKETS LEFT:</Text>
                        <Text style={styles.eventTitle}>{item.ticket_count}</Text>
                    </View>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                {
                    buttons.map(btnItem => (
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate(btnItem.path, {
                                'item': item
                            })}
                        >
                            <View style={{ padding: 5, backgroundColor: btnItem.color, borderRadius: 20, marginTop: 5, alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 10, minWidth: 70, textAlign: 'center', fontFamily: 'FranklinGothic-Light' }}>{btnItem.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                <TouchableOpacity onPress={() => onDelectItem(item.id)}>
                    <View style={{ padding: 5, backgroundColor: '#FF0000', borderRadius: 20, marginTop: 5, alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontSize: 10, minWidth: 70, textAlign: 'center', fontFamily: 'FranklinGothic-Light' }}>DELETE</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

class MyEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

    }
    componentDidMount() {
        this.props.getEvent();
    }

    componentWillReceiveProps() {

    }
    onDelectItem(item) {
console.log(item)
        this.props.removeEvent(item.id)
    }
    render() {
        const { items } = this.state
        console.log(this.props.Event.length)
        return (
            <View>
                <Header title="MY EVENTS" toggleDrawer={this.props.navigation.toggleDrawer} />
                <FlatList
                    horizontal={false}
                    data={this.props.Event}
                    style={styles.flatlistContainer}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <CardContent
                            item={item}
                            onDelectItem={(id) => this.onDelectItem(item)}
                        />

                    }
                />
            </View>
        )
    }

}

const mapStateToProps = ({ event }) => {
    return {
        Event: event.events
    }
}
const mapDispatchToProps = dispatch => {

    return bindActionCreators(ActionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(MyEvent);