import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import { StyleSheet } from 'react-native'
import { Col } from 'native-base'
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    loginContainer: {
        width: Dimension.pro100,
        flex: 1,
        backgroundColor: 'white',
    },
    logoArea: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimension.px50
    },
    logoTitleArea: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    loginInfoArea: {
        paddingTop: Dimension.px15,
        padding: Dimension.px20
    },
    logoTitle: {
        fontSize: 13,
        color: Colors.grayTextColor,
        marginTop: Dimension.px12,
        fontFamily: 'FranklinGothic-Light'
    },
    imageLogo: {
        width: Dimension.px80,
        height: Dimension.px80
    },
    imageSDLive: {
        width: 120,
        resizeMode: 'contain',
        height: 30
    },
    textInputBackground: {
        height: Dimension.px50,
        backgroundColor: '#eaebec',
        borderRadius: Dimension.px25,
        justifyContent: 'center',
        marginTop: Dimension.px20,
    },
    textInput: {
        height: Dimension.px50,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.grayTextColor,
        borderRadius: Dimension.px25,
        flexDirection: 'row',
        paddingLeft: Dimension.px60,
        paddingRight: Dimension.px30,
        fontFamily: 'FranklinGothic-Light',
        fontSize: 13

    },
    datePicker: {
        width: '80%',
        backgroundColor: 'transparent',
        marginLeft: Dimension.px60,

    },

    buttonView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        height: Dimension.px50,
        borderRadius: Dimension.px25,
        marginTop: Dimension.px20,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 220
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily: 'FranklinGothic',
    },
    iconBackground: {
        height: Dimension.px55,
        width: Dimension.px50 * 197 / 177,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        //top:-5      
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 7,
        resizeMode: 'contain'
    },
    emailIcon: {
        fontSize: 15,
        color: "#7d47b7",
        marginRight: 10,
        marginTop: 5
    },
    memberText: {
        marginTop: 20,
        fontSize: 14,
        color: Colors.grayTextColor,
    },
    
    modalContainer: {
        width: Dimension.deviceWidth,
        height: Dimension.deviceHeight,
        backgroundColor: '#d7d7d8E6',
    },

    successContainer: {
        backgroundColor: 'white',
        width: Dimension.deviceWidth,
        height: '100%',

    },
    successView: {
        width: '100%',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    successIcon: {
        fontSize: 150,
        color: Colors.topColor
    },
    regTitle: {
        color: Colors.topColor,
        marginTop: 15
    },
    linearGradient: {
        minWidth: 220,
        height: Dimension.px50,
        borderRadius: Dimension.px25,
        marginTop: Dimension.px20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily: 'FranklinGothic',
    },

})
export default styles
