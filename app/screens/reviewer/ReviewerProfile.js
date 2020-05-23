import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action.js'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StatusBar,Linking } from 'react-native'
import Images from '../../constants/image.js'
import NavigationService from '../../navigation/NavigationService'
import { Icon } from 'native-base'
import styles from './styles.js'
import Follows from '../../components/Follows.js'
import Screens from '../../utils/screens'

class ReviewerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event: props.navigation.getParam('item'),
            UserInfo: props.UserInfo.profile.user
        }
    }

    goToCheers = () => {
        NavigationService.navigate(Screens.PurchaseCheer)
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
        const { UserInfo } = this.state
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
                <View style={styles.tab_control}>
                    <View>
                        <Icon name="info-with-circle" type="Entypo" style={{ color: '#7D47B7', fontSize: 22 }} />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.gift_view} onPress={() => this.goToCheers()}>
                        <Image style={styles.gift_img} source={Images.Gift} />
                        <Text style={styles.gift_text}>GIFT CHEERS</Text>
                    </TouchableOpacity>
                </View>
                <BioComponent />
            </View>
        )

        // }
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewerProfile);
