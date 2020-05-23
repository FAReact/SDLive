import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action.js'
import { View, Linking, FlatList, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StatusBar } from 'react-native'
import Images from '../../constants/image.js'
import NavigationService from '../../navigation/NavigationService'
import { Icon } from 'native-base'
import styles from './styles.js'
import Follows from '../../components/Follows.js'
import PerformTabControl from '../../components/PerformTabControl.js'
import { contents, bioData, events } from './data.js'
import Screens from '../../utils/screens'

class PerformerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserInfo: props.UserInfo.profile.user,
            tab: 1,
            buttons: [
                {
                    title: "BUY TICKETS",
                    color: '#8885CE',
                },
                {
                    title: "VIEW DETAIL",
                    color: '#969696',
                },
            ]
        }
    }

    getDateFromString = (time) => {

        var date = time.substr(0, time.indexOf(' '));
        return date
    }

    getTimeFromString = (time) => {
        var Time = time.substr(time.indexOf(' ') + 1)
        return Time
    }

    redirect = (link) => {
        link && Linking.canOpenURL(link).then(supported => {
            if (supported) {
              Linking.openURL(link);
            } else {
              console.log("Don't know how to open URI: " + link);
            }
          });
    }

    render() {
        const {tab, buttons, UserInfo} = this.state

        const CardContent = (item) => {
            return (
                <View style={styles.cardContainer}>
                    <View style={styles.cardProfieView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 36, height: 36, borderRadius: 18 }} source={{ uri: item.avatar }} />
                            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ opacity: 0.6 }}>{item.time}</Text>
                            </View>
                        </View>
                        <Icon name="dots-three-horizontal" type="Entypo" style={{ color: 'gray', fontSize: 20 }} />
                    </View>
                    <View style={styles.cardLink}>
                        <Text>{item.link}</Text>
                    </View>
                    <View style={styles.cardContentview}>
                        <Text>{item.content}</Text>
                    </View>
                    <View style={styles.cardFollowView}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="heart" type="AntDesign" style={{ color: '#780dcf', fontSize: 20 }} />
                                    <Text style={{ marginLeft: 5 }}>{item.heartNo}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => NavigationService.navigate(Screens.Chat)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                    <Icon name="message1" type="AntDesign" style={{ color: 'gray', fontSize: 20 }} />
                                    <Text style={{ marginLeft: 5 }}>{item.messageNo}</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {/* {
                               item.otherImages.map(item=>(
                                <Image style={styles.otherImage} source={Images.profileImage}/>
                               ))
                           } */}
                        </View>
                    </View>
                </View>
            )
        }

        const UpcomingEvent = (item) => {
            return (
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={Images.Concert} style={{ width: 90, height: 90, borderRadius: 10 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.eventName} >{item.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.eventTitle}>DATE:</Text>
                                <Text style={styles.eventTitle}>{this.getDateFromString(item.time)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.eventTitle}>TIME:</Text>
                                <Text style={styles.eventTitle}>{this.getTimeFromString(item.time)}</Text>
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
                                    onPress={() => NavigationService.navigate(Screens.Tickets)}
                                >
                                    <View style={{ padding: 5, backgroundColor: btnItem.color, borderRadius: 20, marginTop: 5, alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 10, minWidth: 70, textAlign: 'center', fontFamily: 'FranklinGothic-Light' }}>{btnItem.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            )
        }

        const BioComponent = () => {
            return (
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, color: '#969696' }}>BIO</Text>
                            <Text style={{ color: '#969696' }}>{UserInfo.bio}</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 20, color: '#969696' }}>INTERESTS</Text>
                            <Text style={{ fontSize: 12, color: '#969696' }}>{UserInfo.interests}</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 20, color: '#969696' }}>SOCIAL</Text>
                            <View style={styles.socialIconView}>
                            <View style={styles.socialIconView}>
                                <Icon name='facebook-with-circle'
                                 type='Entypo' style={styles.socialIcon} 
                                 onPress={() => this.redirect(UserInfo.facebook)}
                                 />
                                <Icon name='google--with-circle'
                                 type='Entypo' style={styles.socialIcon} 
                                 onPress={() => this.redirect(UserInfo.email)}
                                 />
                                <Icon name='linkedin-with-circle' 
                                type='Entypo' 
                                style={styles.socialIcon} 
                                onPress={() => this.redirect(UserInfo.facebook)}
                                />
                                <Icon name='twitter-with-circle' 
                                type='Entypo' style={styles.socialIcon}
                                 onPress={() => this.redirect(UserInfo.twitter)}
                                 />
                                <Icon name='instagram-with-circle'
                                 type='Entypo' style={styles.socialIcon} 
                                 onPress={() => this.redirect(UserInfo.instagram)}
                                 />
                            </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            )
        }

        return (
            <View style={styles.perfromContainer}>
                <StatusBar
                    barStyle="light-content"
                    translucent={false}
                />
                <ImageBackground
                    style={styles.profileBackground}
                    source={Images.PerformBack}
                >
                    <View style={styles.headerArea}>
                        <TouchableOpacity onPress={() => NavigationService.goBack()}>
                            <Icon name="arrowleft" type="AntDesign" style={{ color: 'white', fontSize: 22 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => NavigationService.navigate(Screens.Profile)}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{ color: 'white', fontSize: 22 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -35 }}>
                        <Image style={styles.profileImage} source={UserInfo.profile_picture !== null ? {
                            uri: UserInfo.profile_picture} : Images.ProfileImage} />
                    </View>
                </ImageBackground>
                <View style={styles.profileViewArea}>
                    <View style={styles.profileInfoArea}>
                        <Text style={styles.profileName}>{UserInfo.name}</Text>
                        <Text style={styles.profileEmail}>{UserInfo.email}</Text>
                    </View>
                </View>
                <Follows />
                <PerformTabControl Tab={tab} onTablClick={value => this.setState({tab: value})} />
                {
                    tab == 1 && (
                        <FlatList
                            horizontal={false}
                            ListHeaderComponent={
                                <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 20, color: 'gray' }}>UPCOMING EVENTS</Text>
                            }
                            nestedScrollEnabled
                            data={this.props.Event}
                            keyExtractor={item => item._id}
                            style={{ paddingHorizontal: 25, paddingTop: 20 }}
                            renderItem={({ item }) =>
                                <UpcomingEvent {...item} />
                            }
                        />
                    )
                }
                {
                    tab == 2 && (
                        <FlatList
                            horizontal={false}
                            data={contents}
                            keyExtractor={item => item._id}
                            renderItem={({ item }) =>
                                <CardContent {...item} />
                            }
                        />
                    )
                }
                {
                    tab == 3 && (
                        <BioComponent />
                    )
                }
            </View>
        )
    }
}

const mapStateToProps = ({ auth, event }) => {
    return {
        UserInfo: auth,
        Event: event.events
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformerProfile);